import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassToCategoryComponent } from './edit-class-to-category.component';

describe('EditClassToCategoryComponent', () => {
  let component: EditClassToCategoryComponent;
  let fixture: ComponentFixture<EditClassToCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassToCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
