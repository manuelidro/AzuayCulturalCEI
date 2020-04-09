import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaAbduccionComponent } from './pagina-abduccion.component';
import { PaginaAbduccionRoutingModule } from './pagina-abduccion-routing.module';

@NgModule({
  declarations: [PaginaAbduccionComponent],
  imports: [
    CommonModule,
    PaginaAbduccionRoutingModule
  ]
})
export class PaginaAbduccionModule { }
