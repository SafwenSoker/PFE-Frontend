import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroupOfTasksComponent } from './update-group-of-tasks.component';

describe('UpdateGroupOfTasksComponent', () => {
  let component: UpdateGroupOfTasksComponent;
  let fixture: ComponentFixture<UpdateGroupOfTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateGroupOfTasksComponent]
    });
    fixture = TestBed.createComponent(UpdateGroupOfTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
