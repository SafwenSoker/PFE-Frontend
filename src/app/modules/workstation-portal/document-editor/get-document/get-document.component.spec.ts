import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDocumentComponent } from './get-document.component';

describe('GetDocumentComponent', () => {
  let component: GetDocumentComponent;
  let fixture: ComponentFixture<GetDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDocumentComponent]
    });
    fixture = TestBed.createComponent(GetDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
