import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorHowItWorksComponent } from './tutor-how-it-works.component';

describe('TutorHowItWorksComponent', () => {
  let component: TutorHowItWorksComponent;
  let fixture: ComponentFixture<TutorHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
