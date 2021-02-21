import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Personaje } from '../../interfaces/personaje.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [`
    .example-full-width{
      width: 100%;
    }
  `
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  personajes: Personaje[] = [];
  personajeSeleccionado! : Personaje | undefined;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
  }

  buscar(){
    if(this.termino.trim().length>0){
      this.personajesService.buscarPersonaje(this.termino.trim())
      .subscribe(personajes => this.personajes = personajes);
    }else{
      this.personajes = [];
    }
  }

  opcionSeleccionada(personaje: MatAutocompleteSelectedEvent) {
  
    if(!personaje.option.value){
      this.personajeSeleccionado = undefined;
      return;
    }

    const personaje1: Personaje = personaje.option.value;
    this.personajesService.mostrarPersonajePorID(personaje1.id)
      .subscribe( personaje => {
        this.personajeSeleccionado = personaje,
        this.termino = personaje.nombre
      });
  }

}
