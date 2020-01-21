import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorDatatableComponent } from './tutor-datatable.component';

describe('TutorDatatableComponent', () => {
  let component: TutorDatatableComponent;
  let fixture: ComponentFixture<TutorDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
