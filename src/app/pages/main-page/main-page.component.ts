import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

  constructor(
    private _loginSvc: LoginService
  ) { }

  ngOnInit(): void {

    this._loginSvc.loginRequest();

  }

}
