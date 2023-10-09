import { Component } from '@angular/core';
import Award from '../shared/classes/award';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent {
  awards: Award[] = [
    // new Award('Premiação 1', ['Descrição 1', 'Descrição 2', 'Descrição 3']),
    // new Award('Premiação 2', ['Descrição 1', 'Descrição 2', 'Descrição 3']),
    // new Award('Premiação 3', ['Descrição 1', 'Descrição 2', 'Descrição 3']),
  ];
}
