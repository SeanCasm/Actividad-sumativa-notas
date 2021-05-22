import { misNotas, Nota } from '../interfaces/nota';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import notas from '../../../backend/notas.json';
@Injectable({
  providedIn: 'root',
})
export class EditarNotaService {
  notaEditar: Nota = { id: 0, titulo: '', descripcion: '', estado: '' };
  public editarNota: boolean = false;

  //______________________________________________
  url: string = 'http://localhost:8080/backend/'; //=C:/Users/Sebastian/Desktop/WEBS/act3/
  //*cambiar la raiz en Apache httpd.conf para que funcione.
  //*hemos usado XAMPP para iniciar Apache.
  //______________________________________________

  constructor(private servicio: HttpClient) {}
  //#region Metodos para notas
  /**
   * Establece la nota a editar
   * @param estado 
   * @param titulo 
   * @param descripcion 
   */
  SetNota(estado:string,titulo:string,descripcion:string){
    this.notaEditar.titulo=titulo;
    this.notaEditar.estado=estado;
    this.notaEditar.descripcion=descripcion;
  }
  /**
   * Guarda la nota en un .json mediante el metodo POST. 
   * @returns
   */
  GuardarNota(): Observable<any> {
    return this.servicio.post(
      `${this.url}guardar.php`,
      JSON.stringify(misNotas)
    );
  }
  /**
   * Obtiene la nota de un .json mediante el metodo GET
   * @returns 
   */
  GetNota(): Observable<any> {
    return this.servicio.get(`${this.url}leer.php`);
    /*
    if((notas as Array<Nota>).length>0)return notas;
    else return;*/
  }

  //#endregion
}
