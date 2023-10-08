import { Component } from '@angular/core';

import { SpeakersData } from '../shared/data/LecturesData';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css'],
})
export class SpeakersListComponent {
  speakersData = SpeakersData;
}
