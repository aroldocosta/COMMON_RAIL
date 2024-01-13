import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingTableComponent } from './starting-table.component';

describe('StartingTableComponent', () => {
  let component: StartingTableComponent;
  let fixture: ComponentFixture<StartingTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartingTableComponent]
    });
    fixture = TestBed.createComponent(StartingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
