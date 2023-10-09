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

    this.getSpeakersList();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.innerWidth = window.innerWidth;
  }

  getSpeakersList() {
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

  getLectureById(id: number | number[]): Lecture | null {
    for (let day of LecturesData) {
      for (let lecture of day) {
        if (lecture.id === id) {
          return lecture;
        }
      }
    }
    return null;
  }

  getLecturesName(ids: number | number[]) {
    let lecturesList = [];
    if (Array.isArray(ids)) {
      ids.forEach((id) => {
        let lecture = this.getLectureById(id);
        if (lecture) {
          lecturesList.push(lecture.title);
        }
      });
    } else {
      let lecture = this.getLectureById(ids);
      if (lecture) {
        lecturesList.push(lecture.title);
      }
    }

    return lecturesList.join(', ');
  }
}
