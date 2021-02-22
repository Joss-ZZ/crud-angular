import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

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

  constructor(private router: Router,
              private authService: AuthService) { }

  get usuario() {
    return this.authService.usuario;
  }

  ngOnInit(): void {
  }

  salir(){
    this.authService.cerrarSesion();
    this.router.navigate(['./auth']);
  }

}
