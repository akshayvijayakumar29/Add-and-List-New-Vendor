import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule, AbstractControl } from '@angular/forms';



{CommonModule}

@Component({
  selector: 'app-service-type-button',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './service-type-button.component.html',
  styleUrl: './service-type-button.component.scss'
})
export class ServiceTypeButtonComponent {
  
  }
