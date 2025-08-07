import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-cta',
  imports: [RouterLink,CommonModule],
  templateUrl: './about-cta.component.html',
  styleUrl: './about-cta.component.css'
})
export class AboutCtaComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserAuthenticated();

    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}
