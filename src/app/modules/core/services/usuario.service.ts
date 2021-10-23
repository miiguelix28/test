import { pluck } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';

@Injectable()
export class UsuarioService {

  private apiurl: string = api

  constructor(
    private http: HttpClient
  ) {}

  getUsuarios() {
    return this.http.get(`${ this.apiurl }/users`);
  }

  getByUsuario(usuario: string) {
    return this.http.get(`${ this.apiurl }/search/users?q=${ usuario }`)
    .pipe(pluck('items'));
  }

}