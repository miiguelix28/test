import { SubSink } from 'subsink';
import { Component, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from '@core/services/usuario.service';

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.scss']
})
export class UsuarioAdminComponent implements OnInit, OnDestroy {

  public usuario: any;
  public usuarios: any[] = [];
  private subscriptions = new SubSink();
  @Output() emitevalor: EventEmitter<any> = new EventEmitter();

  constructor(
    private usuarioSvc: UsuarioService
  ) {}

  ngOnInit() {
    this.usuarioSvc.getUsuarios()
      .subscribe({
        next: data => {
          let usuarios: any = data;
          console.log(usuarios.length)
          for(let i=0; i<usuarios.length; i++) {
            const usuario = usuarios[i];
            if(i < 10) {
              this.usuarios.push(usuario);
            }
          }
        },
        error: err => console.error(err),
        complete: () => console.log('Complete getUsuarios')
      });
      console.log(this.usuarios);
  }
  
  ngOnDestroy(): void {
    
    this.subscriptions.unsubscribe();
  }
}