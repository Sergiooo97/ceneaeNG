import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNdolarHistorialComponent } from './alumno-ndolar-historial.component';

describe('AlumnoNdolarHistorialComponent', () => {
  let component: AlumnoNdolarHistorialComponent;
  let fixture: ComponentFixture<AlumnoNdolarHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoNdolarHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNdolarHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
