import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // عدل المسار حسب مكان الخدمة
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  imports: [RouterLink,CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserAuthenticated();

    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}
