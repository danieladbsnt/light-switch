import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

time: number = 0;
interval: any;

  private sharingDataPrivate: BehaviorSubject<string[]> = new BehaviorSubject
    <string[]>(['Red', 'Orange', 'Green']);

  get sharingDataObservable() {
    return this.sharingDataPrivate.asObservable();
  }

  set sharingData(data: any) {
    this.sharingDataPrivate.next(data);
  }

// startTimer() {
//   this.interval = setInterval(() => {
//     console.log('hola');
//   }, 1000)
// }

// pauseTimer() {
//   clearInterval(this.interval)
// }
}
