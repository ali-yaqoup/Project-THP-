import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  showPassword = false;
  showConfirm = false;

  rules = {
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
    noSpaces: false
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userType: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirm = !this.showConfirm;
  }

  checkPasswordRules() {
    const password = this.f['password'].value || '';

    this.rules.minLength = password.length >= 8;
    this.rules.uppercase = /[A-Z]/.test(password);
    this.rules.lowercase = /[a-z]/.test(password);
    this.rules.number = /[0-9]/.test(password);
    this.rules.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    this.rules.noSpaces = !/\s/.test(password);
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const formData = {
      full_name: this.f['fullName'].value,
      username: this.f['username'].value,
      email: this.f['email'].value,
      user_type: this.f['userType'].value,
      password: this.f['password'].value,
      password_confirmation: this.f['confirmPassword'].value
    };

    // تحقق أن user_type ضمن القيم المسموح بها
    const allowedTypes = ['job_owner', 'artisan', 'admin'];
    if (!allowedTypes.includes(formData.user_type)) {
      alert('الرجاء اختيار نوع مستخدم صحيح');
      return;
    }

    this.authService.register(formData).subscribe({
      next: (res) => {
        console.log('Registration successful', res);
        this.router.navigate(['/email-verification-pending']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        if (err.status === 422 && err.error?.errors) {
          const backendErrors = err.error.errors;
          let errorMsg = '';
          for (let key in backendErrors) {
            errorMsg += `${backendErrors[key].join(', ')}\n`;
          }
          alert(errorMsg); // عرض رسائل الخطأ للمستخدم
        } else {
          alert('حدث خطأ أثناء التسجيل. حاول لاحقًا.');
        }
      }
    });
  }
}