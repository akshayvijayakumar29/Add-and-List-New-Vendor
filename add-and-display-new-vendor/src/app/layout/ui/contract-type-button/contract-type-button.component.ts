import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contract-type-button',
  standalone: true,
  imports: [],
  templateUrl: './contract-type-button.component.html',
  styleUrl: './contract-type-button.component.scss'
})
export class ContractTypeButtonComponent {


  @Input() formControl: FormControl = new FormControl(); // Default initialization in constructor
  @Output() valueChanged = new EventEmitter<any>(); // Emit value changes

  onChange(value: string) {
    this.formControl.setValue(value);  // Update the formControl value
    this.valueChanged.emit(value); // Emit the new value
  }

}
