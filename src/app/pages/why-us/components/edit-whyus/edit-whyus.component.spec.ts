import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWhyusComponent } from './edit-whyus.component';

describe('EditWhyusComponent', () => {
  let component: EditWhyusComponent;
  let fixture: ComponentFixture<EditWhyusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWhyusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWhyusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
