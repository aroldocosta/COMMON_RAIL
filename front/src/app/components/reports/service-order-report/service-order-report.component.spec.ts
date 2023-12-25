import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderReportComponent } from './service-order-report.component';

describe('ServiceOrderReportComponent', () => {
  let component: ServiceOrderReportComponent;
  let fixture: ComponentFixture<ServiceOrderReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOrderReportComponent]
    });
    fixture = TestBed.createComponent(ServiceOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
