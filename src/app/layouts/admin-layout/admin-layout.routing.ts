import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';


import {InfoComponent} from '../../pages/info/info.component';
import { PeriodoComponent } from '../../pages/periodos/periodo/periodo.component';
import { PeriodoNewComponent } from '../../pages/periodos/periodo-new/periodo-new.component';
import { AlumnosComponent } from 'app/pages/Alumno/alumnos/alumnos.component';
import { AlumnoInfoComponent } from 'app/pages/Alumno/alumno-info/alumno-info.component';
import { InfoCardComponent } from 'app/pages/Alumno/info-card/info-card.component';
import { AlumnoCalificacionComponent } from 'app/pages/Alumno/alumno-calificacion/alumno-calificacion.component';
import { AlumnoNdolarHistorialComponent } from 'app/pages/Alumno/alumno-ndolar-historial/alumno-ndolar-historial.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                    component: DashboardComponent },
    { path: 'periodo',                      component: PeriodoComponent },
    { path: 'periodoNew',                   component: PeriodoNewComponent },
    { path: 'icons',                        component: IconsComponent },
    { path: 'maps',                         component: MapsComponent },
    { path: 'notifications',                component: NotificationsComponent },
    { path: 'upgrade',                      component: UpgradeComponent },
    { path: 'info',                         component: InfoComponent},
    { path: 'alumnos',                      component: AlumnosComponent},
    { path: 'alumnos/calificaciones',       component: AlumnoCalificacionComponent},
    { path: 'alumnos/nd/historial',       component: AlumnoNdolarHistorialComponent},
    {
        path: 'alumnos/info/:id',
        component: AlumnoInfoComponent,
        children: [
            {
          path: '',
          loadChildren: '../../pages/Alumno/alumno.module#AlumnoModule'
      }]},



];
