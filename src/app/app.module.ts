import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import { PlataformasEstudiantilesComponent } from './components/plataformas-estudiantiles/plataformas-estudiantiles.component';
import { RecursosCampusComponent } from './components/recursos-campus/recursos-campus.component';
import { BeneficiosEstudiantilesComponent } from './components/beneficios-estudiantiles/beneficios-estudiantiles.component';
import { ProgramasDeIntercambioComponent } from './components/programas-de-intercambio/programas-de-intercambio.component';
import { CalendarioAcademicoComponent } from './components/calendario-academico/calendario-academico.component';
import { ReglamentosYProtocolosComponent } from './components/reglamentos-y-protocolos/reglamentos-y-protocolos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    PlataformasEstudiantilesComponent,
    RecursosCampusComponent,
    BeneficiosEstudiantilesComponent,
    ProgramasDeIntercambioComponent,
    CalendarioAcademicoComponent,
    ReglamentosYProtocolosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
  
  ],
  exports : [
    CommonModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
