import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLoadTableComponent } from './full-load-table.component';

describe('FullLoadTableComponent', () => {
  let component: FullLoadTableComponent;
  let fixture: ComponentFixture<FullLoadTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullLoadTableComponent]
    });
    fixture = TestBed.createComponent(FullLoadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
