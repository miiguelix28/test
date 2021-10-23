import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  
    path: 'usuarios',
    loadChildren: () => import('@feature/usuario/usuario.module')
    .then(m => m.UsuarioModule)
  },
  { path: '', redirectTo: '/usuarios/admin', pathMatch: 'full' },
  { path: '**', redirectTo: '/usuarios/admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
