import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit, OnDestroy {
selectedColor!: string;
private _unsuscribe$ = new Subject<boolean>();

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.sharingData$.pipe(takeUntil(this._unsuscribe$))
      .subscribe({ next: (color) => this.selectedColor = color})    
  }

  changeColor(ev:any) {
    this.service.onSelect(ev)
  }

ngOnDestroy(): void {
  this._unsuscribe$.next(true)
  this._unsuscribe$.complete();
}
}
