import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRotoRoutingModule } from './pagina-roto-routing.module';
import { PaginaRotoComponent } from './pagina-roto.component';

@NgModule({
  declarations: [PaginaRotoComponent],
  imports: [
    CommonModule,
    PaginaRotoRoutingModule
  ]
})
export class PaginaRotoModule { }
