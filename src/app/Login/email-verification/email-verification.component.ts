import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]

})
export class EmailVerificationComponent implements OnInit {
  verifyForm: FormGroup;
  email: string = '';
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.verifyForm = this.fb.group({
      code: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.verifyForm.invalid || !this.email) return;

    const data = {
      email: this.email,
      otp: this.verifyForm.value.code
    };

    this.authService.loginStep2(data).subscribe({
      next: (res) => {

        localStorage.setItem('token', res.token);
        this.authService.setLoggedIn(true);
        const role = res.user?.user_type;


  
        if (role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'artisan') {
          this.router.navigate(['/jobs']);
        } else if (role === 'job_owner') {
          this.router.navigate(['/Contact/contact']);
        } else {
          this.router.navigate(['/section']);
        }
        console.log(role);
      },
      error: (err) => {
        alert('رمز التحقق غير صحيح أو منتهي');
        console.error(err);
      }
    });
  }

  onResend() {
    alert('Verification code resent.');

  }
}
