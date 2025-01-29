import { Component } from '@angular/core';
import { ContractTypeButtonComponent } from "../../../ui/contract-type-button/contract-type-button.component";
import { ServiceTypeButtonComponent } from "../../../ui/service-type-button/service-type-button.component";
import { VendorConfidanceButtonComponent } from "../../../ui/vendor-confidance-button/vendor-confidance-button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  { value: '+91', label: '(+91) India' },
  { value: '+1', label: '(+1) United States' },
  { value: '+44', label: '(+44) United Kingdom' },
  { value: '+61', label: '(+61) Australia' },
  { value: '+81', label: '(+81) Japan' },
  { value: '+49', label: '(+49) Germany' },
  { value: '+33', label: '(+33) France' },
  { value: '+39', label: '(+39) Italy' },
  { value: '+86', label: '(+86) China' },
  { value: '+55', label: '(+55) Brazil' },
  { value: '+7', label: '(+7) Russia' },
  { value: '+82', label: '(+82) South Korea' },
  { value: '+34', label: '(+34) Spain' },
  { value: '+62', label: '(+62) Indonesia' },
  { value: '+27', label: '(+27) South Africa' }
];


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }



  onSubmit() {

      console.log(this.vendorForm.value);

  }


}
