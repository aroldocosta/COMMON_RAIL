import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfLoadTableComponent } from './half-load-table.component';

describe('HalfLoadTableComponent', () => {
  let component: HalfLoadTableComponent;
  let fixture: ComponentFixture<HalfLoadTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalfLoadTableComponent]
    });
    fixture = TestBed.createComponent(HalfLoadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
