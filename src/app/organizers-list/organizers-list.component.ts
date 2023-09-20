import { Component } from '@angular/core';
import Organizer from '../shared/classes/organizer';

@Component({
  selector: 'app-organizers-list',
  templateUrl: './organizers-list.component.html',
  styleUrls: ['./organizers-list.component.css'],
})
export class OrganizersListComponent {
  organizers: Organizer[] = [
    // new Organizer(
    //   'https://www.google.com',
    //   './assets/img/organizers/pfp.png',
    //   'Teste Teste',
    //   'Professor de abobrinhas'
    // ),
  ];
}
