import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTypeButtonComponent } from './contract-type-button.component';

describe('ContractTypeButtonComponent', () => {
  let component: ContractTypeButtonComponent;
  let fixture: ComponentFixture<ContractTypeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractTypeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractTypeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
