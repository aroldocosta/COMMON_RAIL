import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectorModalComponent } from './injector-modal.component';

describe('InjectorModalComponent', () => {
  let component: InjectorModalComponent;
  let fixture: ComponentFixture<InjectorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjectorModalComponent]
    });
    fixture = TestBed.createComponent(InjectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
