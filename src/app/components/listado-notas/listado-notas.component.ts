import { misNotas } from './../../interfaces/nota';
import { NotasRegistroService } from './../../services/notas-registro.service';
import { EditarNotaService } from '../../services/editar-nota.service';
import { Router } from '@angular/router';
import { Nota } from '../../interfaces/nota';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-listado-notas',
  templateUrl: './listado-notas.component.html',
  styleUrls: ['./listado-notas.component.scss'],
})
export class ListadoNotasComponent implements OnInit {
  notas: Array<Nota> = misNotas;
  static primeraEntrada:boolean=true;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private editar: EditarNotaService,
    private registroNotas:NotasRegistroService
  ) {
    this.editar.editarNota = false;
     
  }

  ngOnInit(): void {
    this.editar.GetNota().subscribe((data) => {
      console.log(data);
      this.notas = data;
      this.rellenarListaInterface();
    });
  }
  rellenarListaInterface(){
    //evita una duplicacion de las notas en el array
    misNotas.splice(0,misNotas.length);
    //primera vez que entra en esta vista
      console.log(this.notas);
      //rellena la lista de la interface
      this.notas.forEach((item) => {
        misNotas.push(item);
        //rellena las id del servicio notas-registro
        this.registroNotas.notasID.push(item.id);
      });
      console.log(misNotas.length);
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
 
