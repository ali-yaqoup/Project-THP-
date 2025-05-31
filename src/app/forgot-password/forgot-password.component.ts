import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  imports: [ReactiveFormsModule],
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.forgotForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (this.forgotForm.invalid) {
      return;
    }

    this.authService.sendResetPasswordOtp(this.forgotForm.value.email).subscribe({
      next: (res) => {
        this.successMessage = 'Verification code has been sent to your email.';
        // To navigate to reset password page after sending OTP, uncomment:
        // this.router.navigate(['/reset-password'], { queryParams: { email: this.forgotForm.value.email } });
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while sending the verification code. Please try again.';
        console.error(err);
      }
    });
  }
}