import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOfTasksDetailsComponent } from './group-of-tasks-details.component';

describe('GroupOfTasksDetailsComponent', () => {
  let component: GroupOfTasksDetailsComponent;
  let fixture: ComponentFixture<GroupOfTasksDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupOfTasksDetailsComponent]
    });
    fixture = TestBed.createComponent(GroupOfTasksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
