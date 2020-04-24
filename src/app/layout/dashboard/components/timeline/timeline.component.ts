import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/Modelo/evento';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/Services/evento.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  eventos:Evento[];

  constructor( private router: Router, private service: EventoService){
    this.listar();
  }

  ngOnInit(): void{

  }

  listar(){
    this.service.listar()
    .subscribe(resp => {
      console.log(resp);
      const cs: any = resp;
      this.eventos= cs;
    }, err =>{
      console.log(err);
    });
  }

  eliminar(idEvento){
    this.service.borrar(idEvento)
    .subscribe(resp =>{
      console.log(resp);
      this.listar();
    }, err => {
      console.log(err);
    });
  }

  editar(idEvento){
    localStorage.setItem('idEvento', idEvento);
    this.router.navigate(['/crear-evento']);

  }

  Nuevo(){
    localStorage.removeItem('idEvento');
    this.router.navigate(["/crear-evento"]);
  }

 
  
}


