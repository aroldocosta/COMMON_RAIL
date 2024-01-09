import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjNumberFilterModalComponent } from './inj-number-filter-modal.component';

describe('InjNumberFilterModalComponent', () => {
  let component: InjNumberFilterModalComponent;
  let fixture: ComponentFixture<InjNumberFilterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjNumberFilterModalComponent]
    });
    fixture = TestBed.createComponent(InjNumberFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
