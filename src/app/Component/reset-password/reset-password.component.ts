import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm: FormGroup;
  submitted = false;
  showPassword = false;
  showConfirmPassword = false;

  rules = {
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
    noSpaces: false,
 
  };

  constructor(private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatch });
  }

  get f() {
    return this.resetForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordsMatch(group: AbstractControl): { mismatch: true } | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  checkPasswordRules() {
    const pass = this.f['password'].value || '';
    const confirm = this.f['confirmPassword'].value || '';

    this.rules.minLength = pass.length >= 8;
    this.rules.uppercase = /[A-Z]/.test(pass);
    this.rules.lowercase = /[a-z]/.test(pass);
    this.rules.number = /\d/.test(pass);
    this.rules.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    this.rules.noSpaces = !/\s/.test(pass);
   
  }

  onSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid) return;

    console.log('Password Reset:', this.resetForm.value);
    alert('Password has been reset successfully!');
  }
}