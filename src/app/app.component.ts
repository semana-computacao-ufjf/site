import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Semana da Computação | UFJF';
  firstEventDate = new Date(1998, 1, 1);
  eventBeginDate = new Date(2023, 10, 23);
  eventEndDate = new Date(2023, 10, 27);
  eventNumber: number = 0;
  eventEdition: string = '';

  ngOnInit() {
    this.eventNumber =
      this.eventBeginDate.getFullYear() - this.firstEventDate.getFullYear();
    this.eventEdition = this.getRomanizedNumber(this.eventNumber);
  }

  // Função para converter um número para algarismos romanos
  // Fonte: https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript#:~:text=There%20is%20a%20nice%20one%20here%20on%20this%20blog%20I%20found%20using%20google%3A
  getRomanizedNumber(num: number): string {
    // Checa se o valor é NaN (not a number)
    if (isNaN(num)) {
      return '';
    }
    // Converte o número para string e separa os dígitos, gerando uma array de strings de um único caractere cada
    // o Number tenta converter a variável para um número
    const digits: string[] = String(Number(num)).split('');

    // Lista de algarismos romanos
    const keys: string[] = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
      '',
      'X',
      'XX',
      'XXX',
      'XL',
      'L',
      'LX',
      'LXX',
      'LXXX',
      'XC',
      '',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
    ];

    let romanized: string = '';

    let i: number = 3;

    let digit: number | undefined;
    let key: string | undefined;

    // Loop para iterar sobre os dígitos do número
    while (i--) {
      digit = Number(digits.pop());
      key = keys[digit + i * 10];
      romanized = (key || '') + romanized;
    }
    return Array(Number(digits.join('') + 1)).join('M') + romanized;
  }
}
