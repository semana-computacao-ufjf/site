import { Component, Input } from '@angular/core';
import Supporter from '../shared/classes/supporter';
import { SupportersData } from '../shared/data/SupportersData';

@Component({
  selector: 'app-supporters-list',
  templateUrl: './supporters-list.component.html',
  styleUrls: ['./supporters-list.component.css'],
})
export class SupportersListComponent {
  @Input() isSponsor: boolean = false;
  supporterTypeName: string = '';
  supportersList: Supporter[] = [];

  ngOnInit() {
    if (this.isSponsor) {
      this.supporterTypeName = 'Patrocinadores';
    } else {
      this.supporterTypeName = 'Apoiadores';
    }

    this.supportersList = SupportersData.filter(
      (sup: Supporter) => sup.isSponsor == this.isSponsor
    );
  }
}
