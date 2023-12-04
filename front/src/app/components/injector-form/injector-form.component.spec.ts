import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectorFormComponent } from './injector-form.component';

describe('InjectorFormComponent', () => {
  let component: InjectorFormComponent;
  let fixture: ComponentFixture<InjectorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjectorFormComponent]
    });
    fixture = TestBed.createComponent(InjectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
