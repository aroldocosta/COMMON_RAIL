import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdlingTableComponent } from './idling-table.component';

describe('IdlingTableComponent', () => {
  let component: IdlingTableComponent;
  let fixture: ComponentFixture<IdlingTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdlingTableComponent]
    });
    fixture = TestBed.createComponent(IdlingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
