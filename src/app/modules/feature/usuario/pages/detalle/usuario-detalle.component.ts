import { SubSink } from 'subsink';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '@core/services/usuario.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.scss']
})
export class UsuarioDetalleComponent implements OnInit, OnDestroy {

  public usuario: any;
  public queryString: string = '';
  private subscriptions = new SubSink();

  constructor(
    private usuarioSvc: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) {
  }
  
  ngOnInit(): void {
    this.queryString = this.activatedRoute.snapshot.params.id;
    this.getUsuario(this.queryString);
  }

  getUsuario(usuario: string) {
    this.subscriptions.add(
      this.usuarioSvc.getByUsuario(usuario)
        .subscribe({
          next: (data: any) => this.usuario = data[0],
          error: err => console.error(err),
          complete: () => console.log('Complete getByUsuario')
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}