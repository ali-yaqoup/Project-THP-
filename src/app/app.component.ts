import { Component } from '@angular/core';

import { EmailVerificationComponent } from './Component/email-verification/email-verification.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { RegisterComponent } from './Component/register/register.component';
import { HeaderComponent } from './Component/HOME/header/header.component';
import { ErrorComponent } from './Component/error/error.component';







@Component({
  selector: 'app-root',
  imports: [LoginPageComponent,EmailVerificationComponent,ForgotPasswordComponent,ResetPasswordComponent,RegisterComponent,HeaderComponent,ErrorComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'THP';
}
