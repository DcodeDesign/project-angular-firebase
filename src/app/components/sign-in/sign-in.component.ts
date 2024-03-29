import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void { }

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
