import { Component, Input } from '@angular/core';
import Organizer from '../shared/classes/organizer';

@Component({
  selector: 'app-organizer-profile',
  templateUrl: './organizer-profile.component.html',
  styleUrls: ['./organizer-profile.component.css'],
})
export class OrganizerProfileComponent {
  @Input() organizer!: Organizer;
}
