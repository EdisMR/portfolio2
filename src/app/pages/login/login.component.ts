import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
  ) {
    this.buildForm();
  }

  private loginForm!: FormGroup;
  private loginFormSubscription!: Subscription;

  private buildForm(): void {
    this.loginForm = this._fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
    this.loginFormSubscription = this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnInit(): void {

  }

}
