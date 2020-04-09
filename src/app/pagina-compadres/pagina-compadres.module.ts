import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaginaCompadresRoutingModule } from './pagina-compadres-routing.module';
import { PaginaCompadresComponent } from './pagina-compadres.component';

@NgModule({
  declarations: [PaginaCompadresComponent],
  imports: [
    CommonModule,
    PaginaCompadresRoutingModule
  ]
})
export class PaginaCompadresModule { }
