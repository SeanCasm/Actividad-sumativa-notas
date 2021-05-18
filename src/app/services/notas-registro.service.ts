import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasRegistroService {
  notasID:Array<number>=[];
  constructor() { }
  validarNotaRegistrada(id:number):boolean{
    for(let i=0;i<this.notasID.length;i++){
      if(this.notasID[i]==id)return true;
    }
    return false;
  }
  eliminarID(id:number){
    this.notasID.forEach((item,index)=>{
      if(item==id)this.notasID.splice(index,1);
    });
  }
}
