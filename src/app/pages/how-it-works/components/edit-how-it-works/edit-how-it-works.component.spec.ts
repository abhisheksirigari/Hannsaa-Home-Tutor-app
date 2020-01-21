import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHowItWorksComponent } from './edit-how-it-works.component';

describe('EditHowItWorksComponent', () => {
  let component: EditHowItWorksComponent;
  let fixture: ComponentFixture<EditHowItWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHowItWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
