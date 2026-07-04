import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <app-navbar />
  <main id="main-content">
    <router-outlet />
  </main>
  <app-footer />
  `,
})
export class AppComponent {}
