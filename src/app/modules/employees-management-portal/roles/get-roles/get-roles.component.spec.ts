import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRolesComponent } from './get-roles.component';

describe('GetRolesComponent', () => {
  let component: GetRolesComponent;
  let fixture: ComponentFixture<GetRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetRolesComponent]
    });
    fixture = TestBed.createComponent(GetRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
