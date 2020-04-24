import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/Services/evento.service';
import { Evento } from 'src/app/Modelo/evento';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
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
  
    nuevo(){
      localStorage.removeItem('idEvento');
      this.router.navigate(["/crear-evento"]);
    }
  
   
    
  }
  
  
  