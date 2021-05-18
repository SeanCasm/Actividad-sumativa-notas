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
  titulo: string = '';
  descripcion: string = '';
  datosCompletos: boolean = false;
  primeraVisita: boolean = true;
  public estado: string = '';
  //#endregion
  constructor(public router: Router, private notaServicio: EditarNotaService) {
    if (notaServicio.editarNota) {
      this.rellenarEditarNotaServicio();
    } else {
      this.titulo = this.descripcion = this.estado = '';
    }
  }
  ngOnInit(): void {}
  //#region Metodos para notas
  public rellenarEditarNotaServicio() {
    this.titulo = this.notaServicio.notaEditar.titulo;
    this.estado = this.notaServicio.notaEditar.estado;
    this.descripcion = this.notaServicio.notaEditar.descripcion;
  }
  public checkNota() {
    if (!this.notaServicio.editarNota) {
      if (
        this.titulo == '' ||
        this.estado == '' ||
        this.descripcion == '' ||
        this.descripcion!.length > 150
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
      this.titulo == '' ||
      this.estado == '' ||
      this.descripcion == '' ||
      this.descripcion!.length > 150
    ) {
      this.primeraVisita = this.datosCompletos = false;
    } else {
      this.primeraVisita = this.datosCompletos = true;
      this.notaServicio.notaEditar.titulo = this.titulo;
      this.notaServicio.notaEditar.estado = this.estado;
      this.notaServicio.notaEditar.descripcion = this.descripcion;
      this.notaServicio.editarNota = false;
      this.notaServicio.GuardarNota().subscribe((datos) => {
        console.log(datos);
      });
      this.router.navigate(['../listado-notas']);
    }
  }
  public crearNota() {
    var nota: Nota = {
      id: 0,
      titulo: this.titulo,
      descripcion: this.descripcion,
      estado: this.estado,
    };
    misNotas.push(nota);
    this.primeraVisita = true;
    this.notaServicio.GuardarNota().subscribe(datos=>{
      console.log(datos);
    });
    this.router.navigate(['../listado-notas']);
  }
  //#endregion
}
