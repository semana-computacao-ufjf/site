import { Component, HostListener, Input } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import MenuItem from '../shared/classes/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() eventEdition: string = '';

  faBars = faBars;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;

  logoFontSize: string = '0.8rem';

  menuItems: MenuItem[] = [
    new MenuItem('Apresentação', '#descricao'),
    new MenuItem('Inscrições', '#inscricoes'),
    new MenuItem('Programação', '#programacao'),
    new MenuItem('Patrocinadores', '#apoiadores'),
    new MenuItem('Contato', '#contato'),
    new MenuItem('Organizadores', '#organizadores'),
    new MenuItem('Responsabilidade Social', '#doacoes'),
    // new MenuItem('Palestrantes', '#palestrantes'),
  ];
}
