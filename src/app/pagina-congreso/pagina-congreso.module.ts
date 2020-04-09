import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaCongresoRoutingModule } from './pagina-congreso-routing.module';
import { PaginaCongresoComponent } from './pagina-congreso.component';

@NgModule({
  declarations: [PaginaCongresoComponent],
  imports: [
    CommonModule,
    PaginaCongresoRoutingModule
  ]
})
export class PaginaCongresoModule { }
