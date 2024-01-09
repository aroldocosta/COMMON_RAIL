import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderFilterModalComponent } from './service-order-filter-modal.component';

describe('ServiceOrderFilterModalComponent', () => {
  let component: ServiceOrderFilterModalComponent;
  let fixture: ComponentFixture<ServiceOrderFilterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOrderFilterModalComponent]
    });
    fixture = TestBed.createComponent(ServiceOrderFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
