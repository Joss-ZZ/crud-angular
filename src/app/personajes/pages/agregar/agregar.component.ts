import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {switchMap} from 'rxjs/operators';

import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personaje.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  duracionSnackbar: number = 3;

  generos = [
    {
      genero: 'Masculino',
    },
    {
      genero: 'Femenino'
    }
  ]

  personaje: Personaje = {
    nombre: '',
    genero: 'Masculino',
    img: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
              private personajesService: PersonajesService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {

      if(this.router.url.includes('editar')) {
        this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.personajesService.mostrarPersonajePorID(id))
        )
        .subscribe(personaje=> 
            this.personaje = personaje
        );
      }

  }

  registrar(){
    if(!this.personaje.id){ 
      // Registra
      this.personajesService.registrarPersonaje(this.personaje)
        .subscribe(personaje => {
          this.mostrarSnackbar('Registro exitoso!'),
          this.router.navigate(['/personajes/listado'])});
    }else{
      // Actualiza
      this.personajesService.editarPersonaje(this.personaje)
        .subscribe(personaje => {
          this.mostrarSnackbar('Actualizado correctamente!'),
          this.router.navigate(['/personajes/listado'])});
    }
  }

  eliminar(){
    this.personajesService.eliminarPersonaje(this.personaje!)
      .subscribe(personaje => {
        this.mostrarSnackbar('Borrado correctamente!'),
        this.router.navigate(['/personajes/listado'])});
  }

  mostrarSnackbar(mensaje: string){
    this.snackBar.open(mensaje, 'Ok', {
      duration: this.duracionSnackbar*1000
    });
  }

}
