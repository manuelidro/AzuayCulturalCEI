import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaCorpusComponent } from './pagina-corpus.component';

const routes: Routes = [
    {
        path: '', component: PaginaCorpusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaCorpusRoutingModule {
}
