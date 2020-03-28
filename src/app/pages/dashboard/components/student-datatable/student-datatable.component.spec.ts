import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDatatableComponent } from './student-datatable.component';

describe('StudentDatatableComponent', () => {
  let component: StudentDatatableComponent;
  let fixture: ComponentFixture<StudentDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
