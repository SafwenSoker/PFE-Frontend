import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTasksComponent } from './get-tasks.component';

describe('GetTasksComponent', () => {
  let component: GetTasksComponent;
  let fixture: ComponentFixture<GetTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTasksComponent]
    });
    fixture = TestBed.createComponent(GetTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
