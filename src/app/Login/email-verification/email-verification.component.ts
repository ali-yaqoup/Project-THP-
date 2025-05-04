import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterLink]
})
export class EmailVerificationComponent {
  verifyForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.verifyForm = this.fb.group({
      code: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.verifyForm.invalid) return;

    console.log('Verification Code:', this.verifyForm.value.code);
    alert('Account Verified!');
  }

  onResend() {
    alert('Verification code resent.');
  }
}