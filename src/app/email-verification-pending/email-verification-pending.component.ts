import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-email-verification-pending',
  templateUrl: './email-verification-pending.component.html',
  styleUrls: ['./email-verification-pending.component.css']
})
export class EmailVerificationPendingComponent implements OnInit, OnDestroy {

  private checkInterval$!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // تحقق كل 10 ثوانٍ
    this.checkInterval$ = interval(10000).subscribe(() => {
      this.authService.getUser().subscribe({
        next: (user) => {
          console.log('User status:', user.status);
          if (user?.status === 'pending') {
          
            localStorage.removeItem('token');
            
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {
          console.error('Error checking verification status:', err);
          if (err.status === 401) {
           
            this.router.navigate(['/LoginComponent/login-page']);
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.checkInterval$) {
      this.checkInterval$.unsubscribe();
    }
  }
}