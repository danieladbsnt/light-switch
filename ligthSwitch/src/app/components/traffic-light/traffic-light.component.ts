import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {
colors: string[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.sharingDataObservable.subscribe(
      data => this.colors = data
    )
  }

/*
cuando el value del option del controller.component es de X color, tengo que 
añadir la clase de ese color al div de ese color. Es decir, cuando el option
está seleccionado en el value red, tengo que añadir la clase red al div-red.
*/

}
