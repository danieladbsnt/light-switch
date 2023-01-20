import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit, OnDestroy  {
value!: boolean;
colors: string[] = [];
selected: string = '';
timer: any;
i = 0;

private _unsuscribe$ = new Subject<boolean>();

  constructor(private service: ServiceService) {}

   ngOnInit(): void {
    this.service.sharingDataObservable.subscribe(
      data => this.colors = data
    )
   }
//poner encendido/apagado en negrita en función de si está el checkbox seleccionado o no.
onSelect(ev:any) {
  if (ev.target.checked) {
    this.value = true;
    this.timer = setInterval(() => {
       if (this.value = true && this.colors[this.i] != undefined) {
        this.selected = this.colors[this.i];
        this.i++;
       } 
    }, 1000
    )
  } else {
    this.value = false;
    clearInterval(this.timer);
  }
}

  ngOnDestroy(): void {
    this._unsuscribe$.next(true)
    this._unsuscribe$.complete();
  }
}
