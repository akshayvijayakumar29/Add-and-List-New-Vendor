import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contract-type-button',
  standalone: true,
  imports: [],
  templateUrl: './contract-type-button.component.html',
  styleUrl: './contract-type-button.component.scss'
})
export class ContractTypeButtonComponent implements ControlValueAccessor{
  @Input() contractTypeControl: any; // Accepting FormControl from parent
  selectedContractType: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.selectedContractType = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onContractTypeChange(value: string) {
    this.selectedContractType = value;
    this.onChange(value);
    this.onTouched();
    this.contractTypeControl.setValue(value); // Updating form control
  }

}
