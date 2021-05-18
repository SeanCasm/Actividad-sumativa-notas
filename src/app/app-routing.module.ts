import { ListadoNotasComponent } from './components/listado-notas/listado-notas.component';
import { CrearNotaComponent } from './components/crear-nota/crear-nota.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:CrearNotaComponent},
  {path:'listado-notas',component:ListadoNotasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
