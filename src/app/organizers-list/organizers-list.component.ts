import { Component } from '@angular/core';
import Organizer from '../shared/classes/organizer';
import { OrganizersData } from '../shared/data/OrganizersData';

@Component({
  selector: 'app-organizers-list',
  templateUrl: './organizers-list.component.html',
  styleUrls: ['./organizers-list.component.css'],
})
export class OrganizersListComponent {
  organizers: Organizer[] = [];

  ngOnInit() {
    this.organizers = OrganizersData;
  }
}
