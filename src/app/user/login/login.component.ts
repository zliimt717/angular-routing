import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  errorMessage!: string;
  pageTitle='Log In';

  constructor(private authService:AuthService){}

  login(loginForm:NgForm){
    if(loginForm && loginForm.valid){
      const userName=loginForm.form.value.userName;
      const password=loginForm.form.value.password;
      this.authService.login(userName,password);
    }else{
      this.errorMessage='Please enter a user name and password';
    }
  }
}

