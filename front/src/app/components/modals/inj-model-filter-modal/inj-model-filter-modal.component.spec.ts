import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjModelFilterModalComponent } from './inj-model-filter-modal.component';

describe('InjModelFilterModalComponent', () => {
  let component: InjModelFilterModalComponent;
  let fixture: ComponentFixture<InjModelFilterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjModelFilterModalComponent]
    });
    fixture = TestBed.createComponent(InjModelFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
