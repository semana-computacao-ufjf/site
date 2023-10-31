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

    return meses[mes];
  }

  getEventDateString(): string {
    if (!this.eventBeginDate || !this.eventEndDate) {
      return '';
    }

    return `${this.eventBeginDate.getDate()} a ${this.eventEndDate.getDate()} de ${this.getMonthPtBr(
      this.eventBeginDate.getMonth()
    )}, ${this.eventBeginDate.getFullYear()}`;
  }

  // Função redundante.
  // TODO: Criar mixin e colocar esta função lá
  isPastEventDate(): boolean {
    // Checa se datas foram passadas
    if (!this.eventBeginDate || !this.eventEndDate) {
      return false;
    }
    const now = new Date();
    console.log(now.getTime(), this.eventEndDate);

    // Checa se evento já acabou
    return now.getTime() > this.eventEndDate.getTime();
  }
}
