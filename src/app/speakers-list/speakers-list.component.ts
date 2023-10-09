import { Component, HostListener } from '@angular/core';
import Lecture from '../shared/classes/lecture';
import TypeEnum from '../shared/enums/type-enum';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { LecturesData, SpeakersData } from '../shared/data/LecturesData';
import Speaker from '../shared/classes/speaker';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css'],
})
export class SpeakersListComponent {
  dayActive: number = 0;

  speakersList?: Speaker[];

  innerWidth: number = 480;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    let speakersFiltered = SpeakersData.filter((speaker) => {
      return (
        speaker && speaker.fullName && speaker.description && speaker.imageSrc
      );
    });
    this.speakersList = speakersFiltered.sort((a, b) => {
      if (a.fullName < b.fullName) {
        return -1;
      }
      if (a.fullName > b.fullName) {
        return 1;
      }
      return 0;
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.innerWidth = window.innerWidth;
  }

  getLectureById(id: number): Lecture | null {
    for (let day of LecturesData) {
      for (let lecture of day) {
        if (lecture.id === id) {
          return lecture;
        }
      }
    }
    return null;
  }
}
