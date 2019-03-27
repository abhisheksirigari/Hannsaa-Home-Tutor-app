import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubjectToCategoryComponent } from './edit-subject-to-category.component';

describe('EditSubjectToCategoryComponent', () => {
  let component: EditSubjectToCategoryComponent;
  let fixture: ComponentFixture<EditSubjectToCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubjectToCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubjectToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
