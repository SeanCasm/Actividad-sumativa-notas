import { misNotas, Nota } from '../interfaces/nota';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import notas from '../../../backend/notas.json';
@Injectable({
  providedIn: 'root',
})
export class EditarNotaService {
  notaEditar: Nota = { id: 0, titulo: '', descripcion: '', estado: '' };
  public editarNota: boolean = false;
  url: string = 'http://localhost:8080/';
  constructor(private servicio: HttpClient) {}
  //#region Metodos para notas

  GuardarNota(): Observable<any> {
    return this.servicio.post(
      `${this.url}guardar.php`,
      JSON.stringify(misNotas)
    );
  }

  GetNota():any {
    if((notas as Array<Nota>).length>0)return notas;
    else return;
  }
  
  //#endregion
}
