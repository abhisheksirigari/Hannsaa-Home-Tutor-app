import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHowItWorksComponent } from './student-how-it-works.component';

describe('StudentHowItWorksComponent', () => {
  let component: StudentHowItWorksComponent;
  let fixture: ComponentFixture<StudentHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
