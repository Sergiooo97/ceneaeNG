import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { InfoCardComponent } from './info-card/info-card.component';
import { AlumnoInfoCardComponent } from '../../pages/Alumno/alumno-info-card/alumno-info-card.component';
import { AlumnoDepositoComponent } from './alumno-deposito/alumno-deposito.component';
import { AlumnoRetiroComponent } from './alumno-retiro/alumno-retiro.component';


@NgModule({
  declarations: [
    AlumnoDepositoComponent,
    InfoCardComponent,
    AlumnoRetiroComponent,
    
  ],
 
  imports: [
    CommonModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
