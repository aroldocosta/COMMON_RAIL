import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectorNumberReportComponent } from './injector-number-report.component';

describe('InjectorNumberReportComponent', () => {
  let component: InjectorNumberReportComponent;
  let fixture: ComponentFixture<InjectorNumberReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjectorNumberReportComponent]
    });
    fixture = TestBed.createComponent(InjectorNumberReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
