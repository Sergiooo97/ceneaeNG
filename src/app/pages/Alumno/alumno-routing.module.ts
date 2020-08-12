import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoInfoComponent } from './alumno-info/alumno-info.component';
import { AlumnoInfoCardComponent } from './alumno-info-card/alumno-info-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { AlumnoDepositoComponent } from './alumno-deposito/alumno-deposito.component';
import { AlumnoRetiroComponent } from './alumno-retiro/alumno-retiro.component';


const routes: Routes = [
  {path: '', component: InfoCardComponent},
  {path: 'd', component: AlumnoDepositoComponent},
  {path: 'r', component: AlumnoRetiroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
