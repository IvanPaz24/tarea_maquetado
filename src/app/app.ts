import { Component, inject, signal} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Http } from './services/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   protected http = inject(Http);

  apiUrl = 'https://api.github.com/users/';
  user = 'ivanpaz24';

  usuarioRecibido = signal<any>(null);

  ngOnInit() {
    this.http.traer(this.apiUrl, this.user, this.usuarioRecibido);
  }
}
