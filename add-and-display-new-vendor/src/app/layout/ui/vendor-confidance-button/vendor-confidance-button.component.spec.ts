import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorConfidanceButtonComponent } from './vendor-confidance-button.component';

describe('VendorConfidanceButtonComponent', () => {
  let component: VendorConfidanceButtonComponent;
  let fixture: ComponentFixture<VendorConfidanceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorConfidanceButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorConfidanceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
