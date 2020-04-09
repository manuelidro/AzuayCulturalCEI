import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaginaCorpusRoutingModule } from './pagina-corpus-routing.module';
import { PaginaCorpusComponent } from './pagina-corpus.component';
@NgModule({
  declarations: [PaginaCorpusComponent],
  imports: [
    CommonModule,
    PaginaCorpusRoutingModule
  ]
})
export class PaginaCorpusModule { }
