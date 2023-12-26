import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopModalComponent } from './workshop-modal.component';

describe('WorkshopModalComponent', () => {
  let component: WorkshopModalComponent;
  let fixture: ComponentFixture<WorkshopModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopModalComponent]
    });
    fixture = TestBed.createComponent(WorkshopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
