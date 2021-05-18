import { EditarNotaService } from '../../services/editar-nota.service';
import { Router } from '@angular/router';
import { Nota, misNotas } from '../../interfaces/nota';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-listado-notas',
  templateUrl: './listado-notas.component.html',
  styleUrls: ['./listado-notas.component.scss'],
})
export class ListadoNotasComponent implements OnInit {
  notas: Array<Nota> = misNotas;

  primeraEntrada: boolean = true;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private editar: EditarNotaService,
    private notaServicio: EditarNotaService
  ) {
    this.editar.editarNota = false;
    this.notas = this.notaServicio.GetNota() as Array<Nota>;
    //se rellena la lista de la interface
    if (this.primeraEntrada) {
      this.notas.forEach((item) => {
        misNotas.push(item);
      });
    }
    this.primeraEntrada = false;
  }

  ngOnInit(): void {}
  setNotaEditar(nota: Nota) {
    this.editar.notaEditar = nota;
    this.editar.editarNota = true;

    this.router.navigate(['/']);
  }
  eliminarNota(nota: Nota){
    misNotas.forEach((item,index)=>{
      if(item.id==nota.id) misNotas.splice(index,1);
    });
    this.editar.GuardarNota().subscribe(data=>{
      console.log(data);
    });
  }
}
 
