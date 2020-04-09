import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPikaRoutingModule } from './pagina-pika-routing.module';
import { PaginaPikaComponent } from './pagina-pika.component';

@NgModule({
  declarations: [PaginaPikaComponent],
  imports: [
    CommonModule,
    PaginaPikaRoutingModule
  ]
})
export class PaginaPikaModule { }
