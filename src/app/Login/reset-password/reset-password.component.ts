import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class ResetPasswordComponent {
  emailForm: FormGroup;
  resetForm: FormGroup;
  step = 1;
  message = '';
  error = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // 👈 استيراد Router
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.resetForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    });
  }

  sendOtp() {
    this.error = '';
    this.message = '';
    const email = this.emailForm.value.email;

    if (!email) {
      this.error = 'Email is required';
      return;
    }

    this.loading = true;
    this.authService.sendResetPasswordOtp(email).subscribe({
      next: (res) => {
        this.message = res.message;
        this.step = 2;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Error sending OTP';
        this.loading = false;
      }
    });
  }

  resetPassword() {
    this.error = '';
    this.message = '';
    const email = this.emailForm.value.email;

    const data = {
      email,
      otp: this.resetForm.value.otp,
      password: this.resetForm.value.password,
      password_confirmation: this.resetForm.value.password_confirmation
    };

    if (data.password !== data.password_confirmation) {
      this.error = 'Passwords do not match';
      return;
    }

    this.loading = true;
    this.authService.resetPassword(data).subscribe({
      next: (res) => {
        this.message = res.message;
        this.loading = false;

       
        setTimeout(() => {
          this.router.navigate(['/LoginComponent/login-page']);
        }, 1500);
      },
      error: (err) => {
        this.error = err.error?.message || 'Error resetting password';
        this.loading = false;
      }
    });
  }
}