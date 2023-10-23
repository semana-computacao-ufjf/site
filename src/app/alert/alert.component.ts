import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() title: string = 'Alerta';
  @Input() message: string = '';

  replaceURLsWithAnchorTags(input: string): string {
    // Expressão regular para encontrar URLs que começam com "https://" ou "http://"
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;

    // Substitui as URLs encontradas por uma tag <a> com o link
    const replacedString = input.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank">${url}</a>`;
    });

    return replacedString;
  }
}
