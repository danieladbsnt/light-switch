import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
colors = ['red', 'orange', 'green']
timer: any;
i = 0;
sharingData$ = new Subject<string>();

constructor() {}

onSelect(on:boolean) {
  if (on) {
    this.timer = setInterval(() => {
          this.sharingData$.next(this.colors[this.i]);
          this.i++;
          if (this.i === 3) {
            this.i = 0;
            clearInterval(this.timer)
          }
    }, 1000)
  } else {
    clearInterval(this.timer)
  }
}

}