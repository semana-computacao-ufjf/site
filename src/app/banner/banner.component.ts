import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() eventEdition: string = '';
  @Input() eventBeginDate?: Date;
  @Input() eventEndDate?: Date;
  logoFontSize: string = '2.3rem';

  getMonthPtBr(mes: number): string {
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    return meses[mes - 1];
  }

  getEventDateString(): string {
    if (!this.eventBeginDate || !this.eventEndDate) {
      return '';
    }

    return `${this.eventBeginDate.getDate()} a ${this.eventEndDate.getDate()} de ${this.getMonthPtBr(
      this.eventBeginDate.getMonth()
    )}, ${this.eventBeginDate.getFullYear()}`;
  }
}
