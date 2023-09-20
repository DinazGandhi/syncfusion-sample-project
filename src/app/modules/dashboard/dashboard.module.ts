import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  ChartModule
} from '@syncfusion/ej2-angular-charts';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardLayoutModule,
    ChartModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [DatePipe]
})
export class DashboardModule { }
