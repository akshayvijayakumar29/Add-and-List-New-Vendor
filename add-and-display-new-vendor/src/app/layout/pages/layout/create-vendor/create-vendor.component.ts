import { Component } from '@angular/core';
import { ContractTypeButtonComponent } from "../../../ui/contract-type-button/contract-type-button.component";
import { ServiceTypeButtonComponent } from "../../../ui/service-type-button/service-type-button.component";
import { VendorConfidanceButtonComponent } from "../../../ui/vendor-confidance-button/vendor-confidance-button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../../ui/navbar/navbar.component";
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-create-vendor',
  standalone: true,
  imports: [ContractTypeButtonComponent, ServiceTypeButtonComponent, VendorConfidanceButtonComponent, ReactiveFormsModule, CommonModule, NavbarComponent],
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
    market: new FormControl(''),
    email:new FormControl('',[Validators.required]),
    phoneCode:new FormControl('',[Validators.required]),
    website:new FormControl(''),
    contractType:new FormControl(''),
    vendorConfidence:new FormControl(''),
    phone:new FormControl('',[Validators.required]),

  })

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

  constructor(private fb: FormBuilder,
    private api: ApiService
  ) {}

  countries:any
  ngOnInit()
  {
    this.api.getCountryList().subscribe((res:any)=>{
    this.countries=res;
    console.log(this.countries);
    })
  }



  onSubmit() {

      console.log(this.vendorForm.value);

  }


}
