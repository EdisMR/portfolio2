import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment2 } from 'src/environments/environment.final';
import { loginInterface } from '../interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() {
    this.restoreSession();
  }

  private loginData:BehaviorSubject<loginInterface> = new BehaviorSubject<loginInterface>({loggedIn: false});
  public loginData$ = this.loginData.asObservable();

  public loginRequest(pass:string): void {
    if (pass === environment2.pass4login) {
      this.loginData.next({loggedIn: true});
    } else {
      this.loginData.next({loggedIn: false});
    }
    this.saveSession();
  }

  public logoutRequest(): void {
    this.loginData.next({loggedIn: false});
    this.saveSession();
  }

  saveSession(): void {
    /* save session status to localstorage */
    /* session in localstorage is named session */
    let session = JSON.stringify(this.loginData.getValue());
    if(session) localStorage.setItem('session', session);
  }

  restoreSession(): void {
    /* restore session status from localstorage */
    /* session in localstorage is named session */
    let session = localStorage.getItem('session');
    if(session) this.loginData.next(JSON.parse(session));
  }

}
