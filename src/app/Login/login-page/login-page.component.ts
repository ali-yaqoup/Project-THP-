import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class LoginPageComponent {
  loginForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.authService.loginStep1(this.loginForm.value).subscribe({
      next: (res) => {
        console.log('Login step 1 success:', res);
        
        this.router.navigate(['/LoginComponent/email-verification'], {
          queryParams: { email: this.loginForm.value.email }
        });
      },
      error: (err: any) => {
        console.error('Login failed', err);
        alert(err?.error?.message || 'Login failed. Please check your credentials.');
      }
    });
  }
}