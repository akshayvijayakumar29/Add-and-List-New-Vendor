import { Component } from '@angular/core';
import { ContractTypeButtonComponent } from "../../../ui/contract-type-button/contract-type-button.component";
import { ServiceTypeButtonComponent } from "../../../ui/service-type-button/service-type-button.component";
import { VendorConfidanceButtonComponent } from "../../../ui/vendor-confidance-button/vendor-confidance-button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../../ui/navbar/navbar.component";
import { ApiService } from '../../../../api.service';
import { BreadcrumbComponent } from "../../../ui/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-create-vendor',
  standalone: true,
  imports: [ContractTypeButtonComponent, ServiceTypeButtonComponent, VendorConfidanceButtonComponent, ReactiveFormsModule, CommonModule, NavbarComponent, BreadcrumbComponent,FormsModule],
  templateUrl: './create-vendor.component.html',
  styleUrl: './create-vendor.component.scss'
})
export class CreateVendorComponent {
  constructor(
    private api: ApiService
  ) {}
  vendorForm = new FormGroup({
    vendorName: new FormControl('',[Validators.required,Validators.minLength(2)]),
    streetAddress1:new FormControl('',[Validators.required,Validators.minLength(6)]),
    streetAddress2: new FormControl(''),
    city: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    market: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phoneCode:new FormControl('',[Validators.required]),
    website:new FormControl(''),
    contractType:new FormControl('',[Validators.required]),
    vendorConfidence:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern('[0-9]')]),
    serviceTypes: new FormControl('', [Validators.required]),
    selectTheCompany:new FormControl('',[Validators.required])

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
    serviceType: [
      { type: 'required', message: 'Please select a service' }
    ],

  };



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

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  handleConfirm() {
    console.log('Confirmed!');
    this.closeModal();
  }

  onSubmit() {

      console.log(this.vendorForm.value);
      console.log('Contract Type:', this.vendorForm.get('contractType')?.value);
      console.log('Selected service types:', this.vendorForm.get('serviceTypes')?.value);

  }

  contractTypeOptions = [
    { label: 'None', value: 'full-contract' },
    { label: 'Low', value: 'dates-rates' },
    { label: 'Medium', value: 'online-booking' },
    { label: 'High', value: 'no-contract' }
  ];
}
