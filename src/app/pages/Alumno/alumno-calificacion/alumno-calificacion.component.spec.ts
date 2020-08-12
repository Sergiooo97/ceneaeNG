import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCalificacionComponent } from './alumno-calificacion.component';

describe('AlumnoCalificacionComponent', () => {
  let component: AlumnoCalificacionComponent;
  let fixture: ComponentFixture<AlumnoCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
