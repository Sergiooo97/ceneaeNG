import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HighchartsChartModule } from 'highcharts-angular';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AlumnosComponent } from './pages/Alumno/alumnos/alumnos.component';
import { InfoComponent } from './pages/info/info.component';
import { HighchartsComponent } from './pages/highcharts/highcharts.component';
import { ChartComponent } from './pages/chart/chart.component';
import {HttpClientModule} from '@angular/common/http';
import { AlumnoModule } from './pages/Alumno/alumno.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AlumnosComponent,
    InfoComponent,
    HighchartsComponent,
    ChartComponent,


  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HighchartsChartModule,
    ChartModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
