import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';

import { UsuarioAdminComponent } from './pages/admin/usuario-admin.component';
import { UsuarioBuscarComponent } from './pages/buscar/usuario-buscar.component';
import { UsuarioDetalleComponent } from './pages/detalle/usuario-detalle.component';
import { ChartsModule } from 'ng2-charts';
import { UsuarioGraficasComponent } from './pages/graficas/usuario-graficas.component';
import { NavComponent } from './pages/components/nav/nav.component';

const modules = [
  CommonModule,
  SharedModule,
  ChartsModule,
  UsuarioRoutingModule
];

const components = [
  UsuarioAdminComponent,
  UsuarioBuscarComponent,
  UsuarioDetalleComponent,
  UsuarioGraficasComponent,
  NavComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [modules]
})
export class UsuarioModule { }
