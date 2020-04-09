import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaginaCuencaRoutingModule } from './pagina-cuenca-routing.module';
import { PaginaCuencaComponent } from './pagina-cuenca.component';

@NgModule({
  declarations: [PaginaCuencaComponent],
  imports: [
    CommonModule,
    PaginaCuencaRoutingModule
  ]
})
export class PaginaCuencaModule { }
