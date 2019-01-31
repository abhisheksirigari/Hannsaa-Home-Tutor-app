import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubjectCategoryComponent } from './edit-subject-category.component';

describe('EditSubjectCategoryComponent', () => {
  let component: EditSubjectCategoryComponent;
  let fixture: ComponentFixture<EditSubjectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubjectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubjectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
