import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {

  email = 'ZWRpc2FudGhvbnlAZ21haWwuY29t'

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.buildForm()
  }

  public maxCharacters = 1000
  public form!: FormGroup
  private buildForm(): void {
    this.form = this._formBuilder.group({
      subject: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(this.maxCharacters)]],
    })
  }

  public sendEmail(): void {
    let url = `mailto:${atob(this.email)}?subject=${this.form.value.subject}&body=${this.form.value.message}`
    window.open(url, '_blank')
  }

  public get writtenCharacters(): number {
    return this.form.value.message.length
  }

}
