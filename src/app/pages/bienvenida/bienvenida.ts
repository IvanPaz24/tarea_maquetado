import { Component, input, InputSignal } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-bienvenida',
  imports: [Card],
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css',
})
export class Bienvenida {
  usuarios = [
    { titulo: 'Juan', subtitulo: 'Desarrollador', img: 'https://i.pravatar.cc/100?img=1', link: "https://example.com/juan" },
    { titulo: 'María', subtitulo: 'Diseñadora', img: 'https://i.pravatar.cc/100?img=2', link: "https://example.com/maria" },
    { titulo: 'Carlos', subtitulo: 'Gerente', img: 'https://i.pravatar.cc/100?img=3', link: "https://example.com/carlos" },
    { titulo: 'Ana', subtitulo: 'Analista', img: 'https://i.pravatar.cc/100?img=4', link: "https://example.com/ana" },
  ];
}
