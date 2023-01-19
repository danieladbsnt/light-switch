import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {
value!: boolean;
colors: string[] = [];
selected: string = '';
timer: any;
 i = 0;
// selectedT: string = '';
// selectChange(event:any) {
//   this.selectedT = event.target.value
//   if (this.selectedT === 'Red') {
//     console.log('red');
//   } else if (this.selectedT === 'Orange') {
//     console.log('orange');
//   } else if (this.selectedT === 'Green') {
//     console.log('green');
//   }
// }

  constructor(private service: ServiceService) {
     service.sharingDataObservable.subscribe(
      data => this.colors = data
    )
       
   }

//poner encendido/apagado en negrita en función de si está el checkbox seleccionado o no.
onSelect(ev:any) {
  if (ev.target.checked) {
    this.value = true;
    this.timer = setInterval(() => {
       if (this.value = true && this.colors[this.i] != undefined) {
        this.selected = this.colors[this.i]
        console.log(this.i++)
       } 
    }, 1000
    )
  } else {
    this.value = false;
    ev.target.checked = false;
    clearInterval(this.timer);
  }
}

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  
}
}