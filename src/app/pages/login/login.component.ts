import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private _loginSvc: LoginService,
    private _router: Router,
  ) {
    this.buildForm();
    //this._router.navigate(['/']);
  }

  public loginForm!: FormGroup;

  private buildForm(): void {
    this.loginForm = this._fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    });
  }

  public sendForm(): void {
    let pass = this.loginForm.get('password')?.value;
    this._loginSvc.loginRequest(pass);
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
