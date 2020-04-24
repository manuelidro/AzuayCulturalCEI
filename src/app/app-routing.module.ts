import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';

const routes: Routes = [
    {path: 'crear-evento', component: CrearEventoComponent},
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
    { path: 'pagina-pika', loadChildren: () => import('./pagina-pika/pagina-pika.module').then(m => m.PaginaPikaModule) },
    { path: 'pagina-cuenca', loadChildren: () => import('./pagina-cuenca/pagina-cuenca.module').then(m => m.PaginaCuencaModule) },
    { path: 'pagina-corpus', loadChildren: () => import('./pagina-corpus/pagina-corpus.module').then(m => m.PaginaCorpusModule) },
    { path: 'pagina-roto', loadChildren: () => import('./pagina-roto/pagina-roto.module').then(m => m.PaginaRotoModule) },
    { path: 'pagina-abduccion', loadChildren: () => import('./pagina-abduccion/pagina-abduccion.module').then(m => m.PaginaAbduccionModule) },
    { path: 'pagina-compadres', loadChildren: () => import('./pagina-compadres/pagina-compadres.module').then(m => m.PaginaCompadresModule) },
    { path: 'pagina-congreso', loadChildren: () => import('./pagina-congreso/pagina-congreso.module').then(m => m.PaginaCongresoModule) },
    { path: 'crear-evento', loadChildren: () => import('./crear-evento/crear-evento.module').then(m => m.CrearEventoModule) },
    { path: 'error', loadChildren: () => import('./server-error/server-error.module').then(m => m.ServerErrorModule) },
    { path: 'access-denied', loadChildren: () => import('./access-denied/access-denied.module').then(m => m.AccessDeniedModule) },
    { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
