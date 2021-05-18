import { NotasRegistroService } from './../../services/notas-registro.service';
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

  static primeraEntrada: boolean = true;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private editar: EditarNotaService,
    private registroNotas:NotasRegistroService
  ) {
    this.editar.editarNota = false;
    this.notas = this.editar.GetNota() as Array<Nota>;
     
  }

  ngOnInit(): void {
    //primera vez que entra en esta vista
    console.log(ListadoNotasComponent.primeraEntrada);
    if (ListadoNotasComponent.primeraEntrada) {
      //rellena la lista de la interface
      this.notas.forEach((item) => {
        misNotas.push(item);
        //rellena las id del servicio notas-registro
        this.registroNotas.notasID.push(item.id);
      });
    }
    ListadoNotasComponent.primeraEntrada = false;
  }
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
 
