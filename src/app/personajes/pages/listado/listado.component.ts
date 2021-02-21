import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personajes: Personaje[] = [];

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.personajesService.mostrarPersonajes()
      .subscribe(personajes=> this.personajes = personajes);
  }

}
