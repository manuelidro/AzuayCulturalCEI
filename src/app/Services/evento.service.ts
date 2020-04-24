import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Evento } from '../Modelo/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {


  url = environment.urlMicro;

  constructor(private http: HttpClient) { }

  eventos: Observable<any>;

  listar(){
    return this.http.get<Evento[]>(this.url + 'evento');
  }
  
  recuperarUno(idEvento){
    return this.http.get(this.url + 'evento/' + idEvento);
  }

  guardar(evento) {
    return this.http.post<Evento>(this.url + 'evento/', evento);
  }

  borrar(idEvento){
    return this.http.delete(this.url + 'evento/' + idEvento);
  }
}