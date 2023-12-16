import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInjectionTableComponent } from './pre-injection-table.component';

describe('PreInjectionTableComponent', () => {
  let component: PreInjectionTableComponent;
  let fixture: ComponentFixture<PreInjectionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreInjectionTableComponent]
    });
    fixture = TestBed.createComponent(PreInjectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
