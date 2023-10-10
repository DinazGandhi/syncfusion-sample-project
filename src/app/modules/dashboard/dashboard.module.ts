import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  AccumulationAnnotationService,
  AccumulationChartModule,
  AccumulationDataLabelService,
  AccumulationLegendService,
  AccumulationTooltipService,
  BarSeriesService,
  CategoryService,
  ChartAnnotationService,
  ChartModule,
  ColumnSeriesService,
  DateTimeService,
  LegendService,
  LineSeriesService,
  PieSeriesService,
  RangeColumnSeriesService,
  ScrollBarService,
  SplineSeriesService,
  StackingBarSeriesService,
  StackingColumnSeriesService,
  StackingLineSeriesService,
  StepLineSeriesService,
  TooltipService,
} from '@syncfusion/ej2-angular-charts';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

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
    AccumulationChartModule,
    FormsModule,
    NgSelectModule,
    MatCardModule,
    DragDropModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule
  ],
  providers: [
    DatePipe,
    AccumulationAnnotationService,
    AccumulationDataLabelService,
    AccumulationLegendService,
    AccumulationTooltipService,
    BarSeriesService,
    CategoryService,
    ChartAnnotationService,
    ChartModule,
    ColumnSeriesService,
    DateTimeService,
    LegendService,
    LineSeriesService,
    PieSeriesService,
    RangeColumnSeriesService,
    ScrollBarService,
    SplineSeriesService,
    StackingBarSeriesService,
    StackingColumnSeriesService,
    StackingLineSeriesService,
    StepLineSeriesService,
    TooltipService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DashboardModule { }
