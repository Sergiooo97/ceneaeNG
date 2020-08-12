import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
    imports: [ 
        RouterModule,
        CommonModule, 
        MatButtonModule, 
        MatSlideToggleModule, 
        FormsModule, 
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSliderModule, ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
