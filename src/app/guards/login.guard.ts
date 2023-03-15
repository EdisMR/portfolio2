import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { loginInterface } from '../interfaces/common';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private readonly loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.loginData$.pipe(
      map((loginData:loginInterface) => {
        if(loginData.loggedIn) {
          return true;
        }else{
          this._router.navigate(['/login'], { relativeTo: this._route });
          return false
        }
      })
    );
  }

}
