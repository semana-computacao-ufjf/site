import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Semana da Computação | UFJF';
  eventBeginDate = new Date(2023, 10, 23);
  eventEndDate = new Date(2023, 10, 27);
}
