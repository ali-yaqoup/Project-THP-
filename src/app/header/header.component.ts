import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isLoggedIn = false;
  isAdmin = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserAuthenticated();

    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });

    const token = localStorage.getItem('token');
    if (token) {
      this.authService.getUser().subscribe({
        next: (user: any) => {
          this.isAdmin = user.user_type === 'admin';
          console.log('✅ isAdmin:', this.isAdmin);
        },
        error: (err) => {
          console.warn('Failed to load user:', err);
        }
      });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/LoginComponent/login-page']);
  }

  goToAdminDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }
}
