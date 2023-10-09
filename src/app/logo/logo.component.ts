import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  @Input() eventEdition: string = '';
  @Input() editionColor: string = 'var(--light-purple)';
  @Input() nameColor: string = 'var(--neon-blue)';
  @Input() backgroundColor: string = 'none';
  @Input() wordBreak: boolean = false;
  @Input() hasShadow: boolean = false;
  @Input() fontSize: string = '';
}
