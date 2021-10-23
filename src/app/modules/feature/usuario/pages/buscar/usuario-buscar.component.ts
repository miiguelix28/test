import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { UsuarioService } from '@core/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.scss']
})
export class UsuarioBuscarComponent implements OnDestroy {

  public usuario: any;
  private readonly QUERY_MIN_LENGTH = 4;
  private subscriptions = new SubSink();

  public form = this.fb.group({
    usuario: [null, [
      Validators.required,
      Validators.minLength(this.QUERY_MIN_LENGTH)
    ]]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioSvc: UsuarioService
  ) {}

  get formControls() {
    return this.form.controls;
  }
  
  onSubmit() {
    const { usuario } = this.form.value;
    const wordBanned = 'gcpglobal';
    
    if(!this.form.valid || usuario === wordBanned) return;

    this.router.navigate(['/usuarios/detalle', usuario]);    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}