import { Component } from '@angular/core';
import Lecture from '../shared/classes/lecture';
import TypeEnum from '../shared/enums/type-enum';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Speaker from '../shared/classes/speaker';
import { Lectures } from '../shared/data/Lectures';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  dayActive: number = 0;

  daysList = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  lectureListByDays: Lecture[][] = Lectures;

  getIcon(type: number): IconDefinition {
    return TypeEnum.getIcon(type);
  }

  getColor(type: number): string {
    // return 'danger';
    return TypeEnum.getColor(type);
  }

  calculateEndTime(lecture: Lecture): Date {
    // Calcula o horário de término da palestra pegando o horário de início e somando a duração em minutos
    let endTime = new Date(
      lecture.dateTime.getTime() + lecture.duration * 60000
    );
    return endTime;
  }

  changeDay(day: number): void {
    this.dayActive = day;
  }
}
