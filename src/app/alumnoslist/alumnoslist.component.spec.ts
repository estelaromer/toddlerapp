import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoslistComponent } from './alumnoslist.component';

describe('AlumnoslistComponent', () => {
  let component: AlumnoslistComponent;
  let fixture: ComponentFixture<AlumnoslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
