import { Component, HostListener, Input } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
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

  innerWidth?: number;
  showMobileMenu: boolean = true;
  logoFontSize: string = '0.6rem';

  menuItems: MenuItem[] = [
    new MenuItem('Apresentação', '#descricao'),
    new MenuItem('Inscrições', '#inscricoes'),
    new MenuItem('Programação', '#programacao'),
    new MenuItem('Patrocinadores', '#nossos-patrocinadores'),
    new MenuItem('Organizadores', '#organizadores'),
    new MenuItem('Contato', '#contato'),
    new MenuItem('Palestrantes', '#palestrantes'),
  ];

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 800) {
      this.showMobileMenu = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 800) {
      this.showMobileMenu = false;
    } else {
      this.showMobileMenu = true;
    }
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
