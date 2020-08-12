import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoPromedioComponent } from './alumno-promedio.component';

describe('AlumnoPromedioComponent', () => {
  let component: AlumnoPromedioComponent;
  let fixture: ComponentFixture<AlumnoPromedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoPromedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
