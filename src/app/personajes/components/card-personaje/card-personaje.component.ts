import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent implements OnInit {

  @Input() personaje!: Personaje;

  constructor() { }

  ngOnInit(): void {
  }

}
