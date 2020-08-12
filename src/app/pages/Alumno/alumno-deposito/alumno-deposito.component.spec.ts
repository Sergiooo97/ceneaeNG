import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDepositoComponent } from './alumno-deposito.component';

describe('AlumnoDepositoComponent', () => {
  let component: AlumnoDepositoComponent;
  let fixture: ComponentFixture<AlumnoDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
