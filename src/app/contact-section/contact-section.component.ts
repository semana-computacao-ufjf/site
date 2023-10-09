import { Component, HostListener } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent {
  email: string = 'semana-da-computacao@ice.ufjf.br';
  phone: string = '(32) 2102-3327';
  ufjfWebsite: string = 'https://www2.ufjf.br/';
  iceLocalization: string =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.1247953818397!2d-43.373810185466745!3d-21.775430603952174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989ba1c18d2a97%3A0xacf1ee467831259e!2sICE%20-%20UFJF!5e0!3m2!1spt-BR!2sbr!4v1663093381486!5m2!1spt-BR!2sbr';

  mapWidth: number = 500;
  mapHeight: number = 350;
  innerWidth?: number;

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 500) {
      this.mapWidth = 300;
      this.mapHeight = 200;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 310) {
      this.mapWidth = 250;
      this.mapHeight = 200;
    } else if (this.innerWidth >= 310 && this.innerWidth < 500) {
      this.mapWidth = 300;
      this.mapHeight = 200;
    } else {
      this.mapWidth = 500;
      this.mapHeight = 350;
    }
  }
}
