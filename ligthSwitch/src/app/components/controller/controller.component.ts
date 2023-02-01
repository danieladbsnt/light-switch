import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit, OnDestroy  {
value!: boolean;
selectedColor!: any;

@Output() turnColor = new EventEmitter<boolean>();

private _unsuscribe$ = new Subject<boolean>();

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.sharingData$.pipe(takeUntil(this._unsuscribe$))
    .subscribe({ next: (color) => this.selectedColor = color})
  }

onSelect(){
  this.value = !this.value
  this.turnColor.emit(this.value)
}

  ngOnDestroy(): void {
    this._unsuscribe$.next(true)
    this._unsuscribe$.complete();
  }
}
