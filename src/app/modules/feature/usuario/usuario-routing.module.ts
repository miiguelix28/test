import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioAdminComponent } from './pages/admin/usuario-admin.component';
import { UsuarioDetalleComponent } from './pages/detalle/usuario-detalle.component';
import { UsuarioGraficasComponent } from './pages/graficas/usuario-graficas.component';

const routes: Routes = [
  { path: 'admin', component: UsuarioAdminComponent },
  { path: 'detalle/:id', component: UsuarioDetalleComponent },
  { path: 'graficas', component: UsuarioGraficasComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }