import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassToCategoryComponent } from './add-class-to-category.component';

describe('AddClassToCategoryComponent', () => {
  let component: AddClassToCategoryComponent;
  let fixture: ComponentFixture<AddClassToCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassToCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassToCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
