import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vendor-confidance-button',
  standalone: true,
  imports: [],
  templateUrl: './vendor-confidance-button.component.html',
  styleUrl: './vendor-confidance-button.component.scss'
})
export class VendorConfidanceButtonComponent {
@Input() control!:FormControl


}
