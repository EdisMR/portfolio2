import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  email='ZWRpc2FudGhvbnlAZ21haWwuY29t'

  constructor(
    private _formBuilder:FormBuilder
  ) {
    this.buildForm()
  }

  form!:FormGroup

  buildForm():void{
    this.form = this._formBuilder.group({
      subject: ['',[]],
      message: ['',Validators.required],
    })
  }

  sendEmail():void{
    let url=`mailto:${atob(this.email)}?subject=${this.form.value.subject}&body=${this.form.value.message}`
    window.open(url,'_blank')
  }

  ngOnInit(): void {
  }

}
