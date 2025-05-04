import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common'; 
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgClass ,
    RouterLink
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  showPassword = false;
  showConfirm = false;

  rules = {
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
    noSpaces: false, 

  };

  constructor(private fb: FormBuilder) {
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
    const confirm = this.f['confirmPassword'].value || '';
  
    this.rules.minLength = password.length >= 8;
    this.rules.uppercase = /[A-Z]/.test(password);
    this.rules.lowercase = /[a-z]/.test(password);
    this.rules.number = /\d/.test(password);
    this.rules.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    this.rules.noSpaces = !/\s/.test(password); // ← تحقق من عدم وجود مسافات
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;

    console.log('User Registered:', this.registerForm.value);
    alert('Account created successfully!');
    this.registerForm.reset();
    this.submitted = false;
  }
}