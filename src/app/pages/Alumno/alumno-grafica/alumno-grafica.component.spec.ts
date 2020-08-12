import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoGraficaComponent } from './alumno-grafica.component';

describe('AlumnoGraficaComponent', () => {
  let component: AlumnoGraficaComponent;
  let fixture: ComponentFixture<AlumnoGraficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoGraficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
