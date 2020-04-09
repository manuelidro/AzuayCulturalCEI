import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaCongresoComponent } from './pagina-congreso.component';

const routes: Routes = [
    {
        path: '', component: PaginaCongresoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaCongresoRoutingModule {
}
