import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupOfTasksComponent } from './create-group-of-tasks.component';

describe('CreateGroupOfTasksComponent', () => {
  let component: CreateGroupOfTasksComponent;
  let fixture: ComponentFixture<CreateGroupOfTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGroupOfTasksComponent]
    });
    fixture = TestBed.createComponent(CreateGroupOfTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
