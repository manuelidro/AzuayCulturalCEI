import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPikaComponent } from './pagina-pika.component';

const routes: Routes = [
    {
        path: '', component: PaginaPikaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaPikaRoutingModule {
}
