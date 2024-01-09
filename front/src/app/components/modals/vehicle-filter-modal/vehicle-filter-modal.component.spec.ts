import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFilterModalComponent } from './vehicle-filter-modal.component';

describe('VehicleFilterModalComponent', () => {
  let component: VehicleFilterModalComponent;
  let fixture: ComponentFixture<VehicleFilterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleFilterModalComponent]
    });
    fixture = TestBed.createComponent(VehicleFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
