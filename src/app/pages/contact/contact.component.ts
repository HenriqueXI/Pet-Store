import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup
  EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.EMAIL_REGEXP)]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }

  sendForm() {
    if (this.formGroup.valid) {
      this._snackBar.open('formulario', 'aceito!!', {
        duration: 2000,
      });
    }else{
      this._snackBar.open('Formulario', 'recusado!!', {
        duration: 2000,
      });
    }
  }

}
