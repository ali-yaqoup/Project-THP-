import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <span class="navbar-brand mb-0 h1">
          Technician Hiring Platform
        </span>
      </div>
    </nav>
  `
})
export class HeaderComponent {}
