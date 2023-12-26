import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilterModalComponent } from './customer-filter-modal.component';

describe('CustomerFilterModalComponent', () => {
  let component: CustomerFilterModalComponent;
  let fixture: ComponentFixture<CustomerFilterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerFilterModalComponent]
    });
    fixture = TestBed.createComponent(CustomerFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
