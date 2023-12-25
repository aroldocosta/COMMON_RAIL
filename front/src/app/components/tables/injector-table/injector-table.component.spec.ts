import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectorTableComponent } from './injector-table.component';

describe('InjectorTableComponent', () => {
  let component: InjectorTableComponent;
  let fixture: ComponentFixture<InjectorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjectorTableComponent]
    });
    fixture = TestBed.createComponent(InjectorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
