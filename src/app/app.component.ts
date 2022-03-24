import { Component, VERSION } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipesInService';
  toDate;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.toDate = this.datePipe.transform(new Date(), 'dd/MM/yy HH:mm');
  }
}
