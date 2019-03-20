import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectToCategoryComponent } from './add-subject-to-category.component';

describe('AddSubjectToCategoryComponent', () => {
  let component: AddSubjectToCategoryComponent;
  let fixture: ComponentFixture<AddSubjectToCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubjectToCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjectToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
