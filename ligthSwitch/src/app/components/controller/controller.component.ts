import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
value!: boolean;
colors: string[] = ['Red', 'Yellow', 'Green'];
selected: string = '';

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

onSelect(ev:any) {
  if (ev.target.checked) {
    this.value = true;
  } else {
    this.value = false;
  }
}

// passData() {
//   this.service.data.emit(this.selected);
// }

}
