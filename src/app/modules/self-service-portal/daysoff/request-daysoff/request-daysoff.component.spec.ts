import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDaysoffComponent } from './request-daysoff.component';

describe('RequestDaysoffComponent', () => {
  let component: RequestDaysoffComponent;
  let fixture: ComponentFixture<RequestDaysoffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestDaysoffComponent]
    });
    fixture = TestBed.createComponent(RequestDaysoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
