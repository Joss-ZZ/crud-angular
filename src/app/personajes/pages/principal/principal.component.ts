import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
  `
  ]
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
