import { Component } from '@angular/core';
import Award from '../shared/classes/award';
import { AwardsData } from '../shared/data/AwardsData';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent {
  awards: Award[] = AwardsData;
}
