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
    this._router.navigate(['/home']);
  }

  public loginForm!: FormGroup;

  private buildForm(): void {
    this.loginForm = this._fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
    });
  }

  public sendForm(): void {
    let pass = this.loginForm.get('password')?.value;
    this._loginSvc.loginRequest(pass);
    this._router.navigate(['/home']);
  }

  public get passwordField() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

}
