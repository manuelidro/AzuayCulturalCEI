import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaCuencaComponent } from './pagina-cuenca.component';

const routes: Routes = [
    {
        path: '', component: PaginaCuencaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaCuencaRoutingModule {
}
