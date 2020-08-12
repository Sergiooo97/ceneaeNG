import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { PeriodoComponent } from '../../pages/periodos/periodo/periodo.component';
import { PeriodoNewComponent } from '../../pages/periodos/periodo-new/periodo-new.component';
import { AlumnoDepositoComponent } from '../../pages/Alumno/alumno-deposito/alumno-deposito.component';

import { HighchartsChartModule } from 'highcharts-angular';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlumnoModule } from '../../pages/Alumno/alumno.module';
import { InfoCardComponent } from 'app/pages/Alumno/info-card/info-card.component';
import { AlumnoInfoComponent } from 'app/pages/Alumno/alumno-info/alumno-info.component';

import {MatButtonModule} from '@angular/material/button'; 
import { AlumnoGraficaComponent } from 'app/pages/Alumno/alumno-grafica/alumno-grafica.component';
import { AlumnoPromedioComponent } from 'app/pages/Alumno/alumno-promedio/alumno-promedio.component';
import { AlumnoInformacionComponent } from 'app/pages/Alumno/alumno-informacion/alumno-informacion.component';
import { AlumnoCalificacionComponent } from 'app/pages/Alumno/alumno-calificacion/alumno-calificacion.component';
import { AlumnoNdolarHistorialComponent } from 'app/pages/Alumno/alumno-ndolar-historial/alumno-ndolar-historial.component';

@NgModule({
  imports: [
    CommonModule,
    AlumnoModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    HighchartsChartModule,
    MatButtonModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    PeriodoComponent,
    PeriodoNewComponent,
    AlumnoInfoComponent,
    AlumnoGraficaComponent,
    AlumnoPromedioComponent,
    AlumnoInformacionComponent,
    AlumnoCalificacionComponent,
    AlumnoNdolarHistorialComponent,

  ]
})

export class AdminLayoutModule {}
