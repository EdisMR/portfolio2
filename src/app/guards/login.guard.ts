import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { loginInterface } from '../interfaces/common';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.loginData$.pipe(
      map((loginData:loginInterface) => {
        if(loginData.loggedIn) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }

}
