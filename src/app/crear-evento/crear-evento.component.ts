import { Component, OnInit } from '@angular/core';
import { Evento } from '../Modelo/evento';
import { Router } from '@angular/router';
import { EventoService } from '../Services/evento.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss']
})
export class CrearEventoComponent implements OnInit {
  evento: Evento = {};
  constructor(private router: Router, private eventoService: EventoService) { 
    let idEvento = localStorage.getItem('idEvento');
    if (idEvento) {
      this.eventoService.recuperarUno(idEvento)
        .subscribe(resp => {
          this.evento = resp;
        });
      }
  }


ngOnInit(): void {

}

  guardar() {
  console.log(this.evento);
  this.eventoService.guardar(this.evento)
    .subscribe(resp => {
      console.log(resp);
      alert("Evento creado");
      this.router.navigate(['/grid']);

    }, err => {
      console.log(err);
    })
  }

  regresar(){
    this.router.navigate(['/grid']);
  }
}