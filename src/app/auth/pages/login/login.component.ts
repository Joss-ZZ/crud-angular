
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  ingresar(){

    this.authService.ingresar()
      .subscribe( usuario => {
        this.router.navigate(['/personajes/listado']);
      });

  }

  ingresarSinLogin(){
    this.router.navigate(['/personajes/listado']);
  }

}
