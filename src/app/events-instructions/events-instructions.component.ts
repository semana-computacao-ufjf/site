import { Component, Input } from '@angular/core';
import EventEnum from '../shared/enums/event-enum';

@Component({
  selector: 'app-events-instructions',
  templateUrl: './events-instructions.component.html',
  styleUrls: ['./events-instructions.component.css'],
})
export class EventsInstructionsComponent {
  @Input() event?: number;
  eventName: string = '';
  possibleEventsList = EventEnum.getEvents();

  ngOnInit(): void {
    this.eventName = EventEnum.getEvent(this.event ?? 0);
  }
}
