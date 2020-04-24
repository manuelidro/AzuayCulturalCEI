import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearEventoComponent } from './crear-evento.component';
import { CrearEventoRoutingModule } from './crear-evento-routing.module';

@NgModule({
  declarations: [CrearEventoComponent],
  imports: [
    CommonModule,
    CrearEventoRoutingModule
  ]
})
export class CrearEventoModule { }
