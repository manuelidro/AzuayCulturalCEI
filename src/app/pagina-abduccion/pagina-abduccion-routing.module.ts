import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaAbduccionComponent } from './pagina-abduccion.component';

const routes: Routes = [
    {
        path: '', component: PaginaAbduccionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaAbduccionRoutingModule {
}
