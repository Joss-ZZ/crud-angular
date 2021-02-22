import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificarAutenticacion()
                .pipe(
                  tap(usuarioAutenticado => {
                    if(!usuarioAutenticado){
                      this.router.navigate(['./auth/login']);
                    }
                  })
                )

      // if(this.authService.usuario.id){
      //   return true;
      // }

      // console.log('Bloqueado por el canActivate');
      // return false;
  }

  canLoad(
    route: Route, 
    segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    
      return this.authService.verificarAutenticacion()
                .pipe(
                  tap(usuarioAutenticado => {
                    if(!usuarioAutenticado){
                      this.router.navigate(['./auth/login']);
                    }
                  })
                )
      // if(this.authService.usuario.id){
      //   return true;
      // }

      // console.log('Bloqueado por el canLoad');
      // return false;

  }
  
}
