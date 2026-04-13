import { Component, inject, signal } from '@angular/core';
import { Http } from '../../services/http';
import { Card } from '../card/card';

@Component({
  selector: 'app-perfil',
  imports: [Card],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

  protected http = inject(Http);

  apiUrl = 'https://api.github.com/users/';
  user = 'ivanpaz24';

  usuarioRecibido = signal<any>(null);

  ngOnInit() {
    this.http.traer(this.apiUrl, this.user, this.usuarioRecibido);
  }
}
