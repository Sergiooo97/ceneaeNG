import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoInfoCardComponent } from './alumno-info-card.component';

describe('AlumnoInfoCardComponent', () => {
  let component: AlumnoInfoCardComponent;
  let fixture: ComponentFixture<AlumnoInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
