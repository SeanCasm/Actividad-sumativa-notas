import { NotasRegistroService } from './../../services/notas-registro.service';
import { EditarNotaService } from '../../services/editar-nota.service';
import { Nota, misNotas } from '../../interfaces/nota';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss'],
})
export class CrearNotaComponent implements OnInit {
  //#region Propiedades
  notaEditar: Nota = { id: 0, titulo: '', descripcion: '', estado: '' };
  datosCompletos: boolean = false;
  primeraVisita: boolean = true;
  //#endregion
  constructor(
    public router: Router,
    private notaServicio: EditarNotaService,
    private registroNotas: NotasRegistroService
  ) {
    if (notaServicio.editarNota) {
      this.rellenarEditarNotaServicio();
    } else {
      this.notaEditar.titulo =
        this.notaEditar.descripcion =
        this.notaEditar.estado =
          '';
    }
  }
  ngOnInit(): void {}
  //#region Metodos para notas
  public rellenarEditarNotaServicio() {
    this.notaEditar=this.notaServicio.notaEditar;
  }
  public checkNota() {
    if (!this.notaServicio.editarNota) {
      if (
        this.notaEditar.titulo == '' ||
        this.notaEditar.estado == '' ||
        this.notaEditar.descripcion == '' ||
        this.notaEditar.descripcion!.length > 150
      ) {
        this.datosCompletos = false;
      } else {
        this.datosCompletos = true;
        this.crearNota();
      }
      this.primeraVisita = false;
    } else {
      this.editarNota();
    }
  }
  public editarNota() {
    if (
      this.notaEditar.titulo == '' ||
      this.notaEditar.estado == '' ||
      this.notaEditar.descripcion == '' ||
      this.notaEditar.descripcion!.length > 150
    ) {
      this.primeraVisita = this.datosCompletos = false;
    } else {
      this.primeraVisita = this.datosCompletos = true;
      this.notaServicio.notaEditar= this.notaEditar;
      this.notaServicio.editarNota = false;
      this.notaServicio.GuardarNota().subscribe((datos) => {
        console.log(datos);
      });
      this.router.navigate(['../listado-notas']);
    }
  }
  GenerarID(): number {
    var id: number = 0;
    do {
      id =
        Math.floor(Math.random() * (100000000 - (-100000000 + 1))) + -100000000;
    } while (this.registroNotas.validarNotaRegistrada(id));
    this.registroNotas.notasID.push(id);
    return id;
  }
  public crearNota() {
    var nota: Nota = {
      id: this.GenerarID(),
      titulo: this.notaEditar.titulo,
      descripcion: this.notaEditar.descripcion,
      estado: this.notaEditar.estado,
    };
    misNotas.push(nota);
    this.primeraVisita = true;
    this.notaServicio.GuardarNota().subscribe(datos => {
      console.log(datos);
    });
    this.router.navigate(['../listado-notas']);
  }
  //#endregion
}
