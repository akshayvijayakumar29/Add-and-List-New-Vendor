import { Component } from '@angular/core';
import { ContractTypeButtonComponent } from "../../../ui/contract-type-button/contract-type-button.component";
import { ServiceTypeButtonComponent } from "../../../ui/service-type-button/service-type-button.component";
import { VendorConfidanceButtonComponent } from "../../../ui/vendor-confidance-button/vendor-confidance-button.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-vendor',
  standalone: true,
  imports: [ContractTypeButtonComponent, ServiceTypeButtonComponent, VendorConfidanceButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './create-vendor.component.html',
  styleUrl: './create-vendor.component.scss'
})
export class CreateVendorComponent {
  vendorForm = new FormGroup({

  })

  countries = [
    { value: '', label: 'Select Country' },
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'AU', label: 'Australia' },
    // Add more countries as needed
  ];

  markets = [
    { value: '', label: 'Select a Market' },
    { value: 'AA-Antarctica', label: 'AA-Antarctica' },
    { value: 'US-United-States', label: 'US-United States' },
    { value: 'EU-European-Union', label: 'EU-European Union' },
    { value: 'CA-Canada', label: 'CA-Canada' },
    { value: 'AU-Australia', label: 'AU-Australia' },
    { value: 'JP-Japan', label: 'JP-Japan' },
    { value: 'CN-China', label: 'CN-China' },
    { value: 'BR-Brazil', label: 'BR-Brazil' },
    { value: 'IN-India', label: 'IN-India' },
    { value: 'RU-Russia', label: 'RU-Russia' }
  ];

  states = [
    { value: '', label: 'Select State/Province/Region' },
    // US States
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    // Canadian Provinces
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'ON', label: 'Ontario' },
    { value: 'QC', label: 'Quebec' },
    // Australian States
    { value: 'NSW', label: 'New South Wales' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'QLD', label: 'Queensland' }
  ];

  phoneCodes = [
    { value: '', label: 'Code' },
    { value: '+91', label: '(+91) India' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    // this.vendorForm = this.fb.group({
    //   vendorName: ['', Validators.required],
    //   streetAddress1: [''],
    //   streetAddress2: [''],
    //   city: ['', Validators.required],
    //   country: ['', Validators.required],
    //   state: [''],
    //   postalCode: [''],
    //   market: ['', Validators.required],
    //   email: ['', [Validators.email]],
    //   phoneCode: [''],
    //   phone: [''],
    //   website: [''],
    //   serviceTypes: ['', Validators.required],
    //   contractType: [''],
    //   vendorConfidence: ['']
    // });
  }

  onSubmit(): void {
    if (this.vendorForm.valid) {
      console.log(this.vendorForm.value);
      // Handle form submission
    }
  }


}
