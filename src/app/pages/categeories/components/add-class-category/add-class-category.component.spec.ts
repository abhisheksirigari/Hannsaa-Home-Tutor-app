import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassCategoryComponent } from './add-class-category.component';

describe('AddClassCategoryComponent', () => {
  let component: AddClassCategoryComponent;
  let fixture: ComponentFixture<AddClassCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
