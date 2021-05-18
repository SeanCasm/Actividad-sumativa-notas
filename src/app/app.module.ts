import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearNotaComponent } from './components/crear-nota/crear-nota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListadoNotasComponent } from './components/listado-notas/listado-notas.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http'; 
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [AppComponent, CrearNotaComponent, ListadoNotasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
