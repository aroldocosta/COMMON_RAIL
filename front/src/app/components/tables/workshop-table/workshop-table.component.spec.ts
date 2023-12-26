import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopTableComponent } from './workshop-table.component';

describe('WorkshopTableComponent', () => {
  let component: WorkshopTableComponent;
  let fixture: ComponentFixture<WorkshopTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopTableComponent]
    });
    fixture = TestBed.createComponent(WorkshopTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
