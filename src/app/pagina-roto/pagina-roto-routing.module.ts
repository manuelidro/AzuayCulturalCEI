import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaRotoComponent } from './pagina-roto.component';

const routes: Routes = [
    {
        path: '', component: PaginaRotoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaRotoRoutingModule {
}
