import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEventoComponent } from './crear-evento.component';

const routes: Routes = [
    {
        path: '', component: CrearEventoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrearEventoRoutingModule {
}
