import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  get email(): any {
    return this.loginFormGroup.get('email');
  }
  get password(): any {
    return this.loginFormGroup.get('password');
  }
}
