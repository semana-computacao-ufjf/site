import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-clock-cta',
  templateUrl: './clock-cta.component.html',
  styleUrls: ['./clock-cta.component.css'],
})
export class ClockCtaComponent {
  // Pega datas iniciais e finais para calcular timer
  @Input() eventBeginDate?: Date;
  @Input() eventEndDate?: Date;

  // Setta variáveis que serão exibidas
  daysRemaining: number = 0;
  hoursRemaining: number = 0;
  minutesRemaining: number = 0;
  secondsRemaining: number = 0;

  innerWidth: number = window.innerWidth;

  ngOnInit(): void {
    // Checa se deve mostrar timer
    if (this.showTimer()) {
      // Chama função de atualizar timer a cada 1 segundo
      setInterval(() => {
        this.updateTimer();
      }, 1000);
    }
  }

  showTimer(): boolean {
    // Checa se datas foram passadas
    if (!this.eventBeginDate || !this.eventEndDate) {
      return false;
    }
    const now = new Date();

    // Checa se evento ainda não começou, só mostra o timer se evento ainda não começou
    return now.getTime() <= this.eventBeginDate.getTime();
  }

  isPastEventDate(): boolean {
    // Checa se datas foram passadas
    if (!this.eventBeginDate || !this.eventEndDate) {
      return false;
    }
    const now = new Date();

    // Checa se evento já acabou
    return now.getTime() > this.eventEndDate.getTime();
  }

  isInEventWeek(): boolean {
    // Checa se datas foram passadas
    if (!this.eventBeginDate || !this.eventEndDate) {
      return false;
    }
    const now = new Date();

    // Checa se evento está acontecendo
    return (
      now.getTime() >= this.eventBeginDate.getTime() &&
      now.getTime() <= this.eventEndDate.getTime()
    );
  }

  updateTimer(): void {
    // Checa se datas foram passadas
    if (!this.eventBeginDate || !this.eventEndDate) {
      return;
    }

    const now = new Date();

    // Checa tempo para evento começar
    // Se for negativo, evento já começou e não é necessário atualizar timer
    const timeRemaining = this.eventBeginDate.getTime() - now.getTime();

    if (timeRemaining < 0) {
      return;
    }

    // Calcula dias, horas, minutos e segundos restantes
    this.daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    this.hoursRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutesRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.innerWidth = window.innerWidth;
  }
}
