import { Component, OnInit } from '@angular/core';
import EventEnum from './shared/enums/event-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Semana da Computação | UFJF';
  firstEventDate = new Date(1998, 1, 1);
  // OBS: meses no JavaScript começam em 0 = Janeiro
  eventBeginDate = new Date(2023, 9, 23, 0);
  eventEndDate = new Date(2023, 19, 27, 0);
  eventNumber: number = 0;
  eventEdition: string = '';

  alertMessageDonations: string =
    'Para confirmar a sua participação no evento, é necessário realizar uma doação de um PIX no valor de R$ 6,00. A chave de doação é 20756049000186. Você deve enviar o comprovante para o formulário https://forms.gle/EwaQvDw8zYpsgZe97';
  alertMessageDownpour: string = `Hoje, no final da tarde e início da noite, uma tempestade em Juiz de Fora causou danos em várias unidades da UFJF. Muitas quedas de árvore levaram o caos aos acessos de entrada e de saída do campus. Apesar do trabalho das equipes da Proinfra, ainda há retenções em vários lugares. Além disso, tivemos vidraças quebradas, salas encharcadas, portas arrancadas e outros danos. Nas instalações do Instituto de Ciências Exatas diversos foram os problemas. <br>Neste sentido, todas as palestras da XXV Semana da Computação da UFJF que estavam previstas para as salas do prédio do Reuni foram transferidas para o auditório do prédio DCC/EST. Além disso, como alguns acessos estão com retenções ainda, sugerimos àqueles que ainda não se dirigiram ao campus que acompanhem as transmissões das palestras nos links que serão postados nas redes sociais do evento. <br> Os locais das atividades de amanhã, 27/10/2023, serão confirmados no site e redes sociais do evento. <br>Gratos pela compreensão,
  `;

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
