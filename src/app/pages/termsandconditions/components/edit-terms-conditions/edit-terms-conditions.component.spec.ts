import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTermsConditionsComponent } from './edit-terms-conditions.component';

describe('EditTermsConditionsComponent', () => {
  let component: EditTermsConditionsComponent;
  let fixture: ComponentFixture<EditTermsConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTermsConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
