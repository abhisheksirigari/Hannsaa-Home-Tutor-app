import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectCategoryComponent } from './add-subject-category.component';

describe('AddSubjectCategoryComponent', () => {
  let component: AddSubjectCategoryComponent;
  let fixture: ComponentFixture<AddSubjectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubjectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
