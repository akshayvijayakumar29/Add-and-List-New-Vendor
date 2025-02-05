import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/ui/navbar/navbar.component";
import { CreateVendorComponent } from "./layout/pages/layout/create-vendor/create-vendor.component";
import { FooterComponent } from "./layout/ui/footer/footer.component";
import { ServiceTypeButtonComponent } from './layout/ui/service-type-button/service-type-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'add-and-display-new-vendor';
}
