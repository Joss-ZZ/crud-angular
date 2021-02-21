import { Pipe, PipeTransform } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(personaje: Personaje): string {

    //Quiere decir que se va a registrar un nuevo personaje, ya que tiene un id undefined
    if(!personaje.id){
      return `assets/no-image.png`; 
    }

    //Puede que el personaje tenga una image o no
    if(personaje.img){

      return personaje.img; 

    }else if(!personaje.img){

      return `assets/personajes/${personaje.id}.jpg`; 

    }

  }

}
