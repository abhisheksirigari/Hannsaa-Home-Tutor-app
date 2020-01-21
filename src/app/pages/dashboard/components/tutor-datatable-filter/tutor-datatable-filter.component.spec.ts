import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorDatatableFilterComponent } from './tutor-datatable-filter.component';

describe('TutorDatatableFilterComponent', () => {
  let component: TutorDatatableFilterComponent;
  let fixture: ComponentFixture<TutorDatatableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorDatatableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorDatatableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
