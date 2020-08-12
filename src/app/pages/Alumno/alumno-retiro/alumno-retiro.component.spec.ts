import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoRetiroComponent } from './alumno-retiro.component';

describe('AlumnoRetiroComponent', () => {
  let component: AlumnoRetiroComponent;
  let fixture: ComponentFixture<AlumnoRetiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoRetiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
