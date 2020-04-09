import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaCompadresComponent } from './pagina-compadres.component';

const routes: Routes = [
    {
        path: '', component: PaginaCompadresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaCompadresRoutingModule {
}
