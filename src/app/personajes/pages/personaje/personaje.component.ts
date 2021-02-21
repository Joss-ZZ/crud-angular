import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';
import { switchMap } from 'rxjs/operators';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: [
    `
      p{
        text-align: center
      }
      .container{
        display: flex;
        justify-content: center;
        margin-bottom: 25px
      }
      .card{
        flex-basis: 250px;
      }
      button{
        text-align:center;
      }
    `
  ]
})
export class PersonajeComponent implements OnInit {

  personaje!: Personaje;

  constructor(private activatedRoute: ActivatedRoute,
              private personajesService: PersonajesService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id})=> this.personajesService.mostrarPersonajePorID(id))
    )
    .subscribe(personaje=> this.personaje = personaje);

  }

  regresar(){
    this.router.navigate(['/personajes/listado']);
  }

}
