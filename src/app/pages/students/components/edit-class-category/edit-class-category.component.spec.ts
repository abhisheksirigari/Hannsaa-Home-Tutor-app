import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassCategoryComponent } from './edit-class-category.component';

describe('EditClassCategoryComponent', () => {
  let component: EditClassCategoryComponent;
  let fixture: ComponentFixture<EditClassCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
