import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTermsConditionsComponent } from './teacher-terms-conditions.component';

describe('TeacherTermsConditionsComponent', () => {
  let component: TeacherTermsConditionsComponent;
  let fixture: ComponentFixture<TeacherTermsConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTermsConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
