
import { Component } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-passwort-zuruecksetzen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './passwort-zuruecksetzen.html',
  styleUrl: './passwort-zuruecksetzen.css'
})
export class PasswortZuruecksetzen {

  passwortForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwortForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^[^\s@]+@(student\.)?htw-berlin\.de$/i
        )
      ]]
    });
  }
}
