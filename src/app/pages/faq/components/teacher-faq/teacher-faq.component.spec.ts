import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFaqComponent } from './teacher-faq.component';

describe('TeacherFaqComponent', () => {
  let component: TeacherFaqComponent;
  let fixture: ComponentFixture<TeacherFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
