import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit, OnDestroy {
colors: string[] = [];
timer: any;
i = 0;
color1: string = 'gray';
color2: string = 'gray';
color3: string = 'gray';

// sendData = new BehaviorSubject(this.test());

private _unsuscribe$ = new Subject<boolean>();

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.sharingDataObservable.subscribe(
      data => this.colors = data
    )
  }

// communicateData() {
//   this.sendData.next()
// }
//pasar esta función al hermano1 par que se haga cuando hermano1 le de click al checkbox¿?
test() {
    this.timer = setInterval(() => {
       if (this.colors[this.i] != undefined && this.colors[this.i] == 'Red') {
        console.log('red');
        this.color1 = 'red'
        this.i++;
       } else if (this.colors[this.i] != undefined && this.colors[this.i] == 'Orange') {
        this.color1 = 'gray'
        this.color2 = 'orange'
        this.i++;
        console.log('orange');
       } else if (this.colors[this.i] != undefined && this.colors[this.i] == 'Green') {
        this.color2 = 'gray'
        this.color3 = 'green'
        this.i++;
        console.log('green');
       }
    }, 1000
    )
}

/*
cuando el value del option del controller.component es de X color, tengo que 
añadir la clase de ese color al div de ese color. Es decir, cuando el option
está seleccionado en el value red, tengo que añadir la clase red al div-red.
*/
ngOnDestroy(): void {
  this._unsuscribe$.next(true)
  this._unsuscribe$.complete();
}
}
