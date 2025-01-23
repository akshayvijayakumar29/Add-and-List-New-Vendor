import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ContractTypeButtonComponent } from "../../../ui/contract-type-button/contract-type-button.component";
import { ServiceTypeButtonComponent } from "../../../ui/service-type-button/service-type-button.component";
import { VendorConfidanceButtonComponent } from "../../../ui/vendor-confidance-button/vendor-confidance-button.component";

@Component({
  selector: 'app-create-vendor',
  standalone: true,
  imports: [RouterOutlet, ContractTypeButtonComponent, ServiceTypeButtonComponent, VendorConfidanceButtonComponent],
  templateUrl: './create-vendor.component.html',
  styleUrl: './create-vendor.component.scss'
})
export class CreateVendorComponent {

}
