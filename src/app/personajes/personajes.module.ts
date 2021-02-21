import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CardPersonajeComponent } from './components/card-personaje/card-personaje.component';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    AgregarComponent, 
    BuscarComponent, 
    PersonajeComponent, 
    PrincipalComponent, 
    ListadoComponent, CardPersonajeComponent, ImagenPipe, 
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PersonajesModule { }
