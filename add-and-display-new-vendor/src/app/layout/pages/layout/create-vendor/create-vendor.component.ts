import { Component } from '@angular/core';
import { ContractTypeButtonComponent } from "../../../ui/contract-type-button/contract-type-button.component";
import { ServiceTypeButtonComponent } from "../../../ui/service-type-button/service-type-button.component";
import { VendorConfidanceButtonComponent } from "../../../ui/vendor-confidance-button/vendor-confidance-button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../../ui/navbar/navbar.component";
import { ApiService } from '../../../../api.service';
import { FooterComponent } from "../../../ui/footer/footer.component";

@Component({
  selector: 'app-create-vendor',
  standalone: true,
  imports: [ContractTypeButtonComponent, ServiceTypeButtonComponent, VendorConfidanceButtonComponent, ReactiveFormsModule, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './create-vendor.component.html',
  styleUrl: './create-vendor.component.scss'
})
export class CreateVendorComponent {
  vendorForm = new FormGroup({
    vendorName: new FormControl('',[Validators.required]),
    streetAddress1:new FormControl('',[Validators.required]),
    streetAddress2: new FormControl(''),
    city: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    market: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    phoneCode:new FormControl('',[Validators.required]),
    website:new FormControl(''),
    contractType:new FormControl(''),
    vendorConfidence:new FormControl(''),
    phone:new FormControl('',[Validators.required]),

  })



  validationMessages = {
    vendorName: [
      { type: 'required', message: 'Vendor name is required' },
      { type: 'minlength', message: 'Name must be at least 2 characters long' }
    ],
    city: [
      { type: 'required', message: 'City is required' }
    ],
    country: [
      { type: 'required', message: 'Please select a country' }
    ],
    email: [
      { type: 'email', message: 'Please enter a valid email' }
    ],
    phone: [
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ],
    market: [
      { type: 'required', message: 'Please select at least one market' }
    ],
    serviceTypes: [
      { type: 'required', message: 'Please select at least one service type' }
    ]
  };

  constructor(private fb: FormBuilder,
    private api: ApiService
  ) {}

  countries:any
  markets:any
  ngOnInit()
  {
    this.api.getCountryList().subscribe((res:any)=>{
    this.countries=res;
    console.log(this.countries);
    })

    this.api.getMarkets().subscribe((res:any)=>{
      this.markets=res;
      console.log(this.markets);

  })
  }



  onSubmit() {

      console.log(this.vendorForm.value);

  }


}
