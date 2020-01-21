import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTutorDetailsComponent } from './view-tutor-details.component';

describe('ViewTutorDetailsComponent', () => {
  let component: ViewTutorDetailsComponent;
  let fixture: ComponentFixture<ViewTutorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTutorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTutorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
