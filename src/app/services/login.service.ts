import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment2 } from 'src/environments/environment.final';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  public loginRequest(): void {
    let pass4login = environment2.pass4login;
    let passUser = this._activatedRoute.snapshot.queryParamMap.get('pass');

    if (passUser !== pass4login) {
      this.router.navigate(['/404']);
    }
  }

}
