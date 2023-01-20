import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

timer: any;
interval: any;

  private sharingDataPrivate: BehaviorSubject<string[]> = new BehaviorSubject
    <string[]>(['Red', 'Orange', 'Green']);

  get sharingDataObservable() {
    return this.sharingDataPrivate.asObservable();
  }

  set sharingData(data: any) {
    this.sharingDataPrivate.next(data);
  }
}
