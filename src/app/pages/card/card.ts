import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  value = input(0);

  titulo: InputSignal<string> = input('');
  subtitulo: InputSignal<string> = input('');
  img: InputSignal<string> = input('');
  link: InputSignal<string> = input('');

  

}
