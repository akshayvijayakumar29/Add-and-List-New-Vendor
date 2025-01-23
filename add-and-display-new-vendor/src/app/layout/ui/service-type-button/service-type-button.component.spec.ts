import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeButtonComponent } from './service-type-button.component';

describe('ServiceTypeButtonComponent', () => {
  let component: ServiceTypeButtonComponent;
  let fixture: ComponentFixture<ServiceTypeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTypeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTypeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
