import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
value!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

onSelect(ev:any) {
  if (ev.target.checked) {
    this.value = true;
  } else {
    this.value = false;
  }
}

}
