import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoDepositoComponent } from '../Alumno/alumno-deposito/alumno-deposito.component';
import { UserRoutes } from './user.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
