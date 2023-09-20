import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AccumulationTheme,
  ChartTheme,
  IAccLoadedEventArgs,
  ILoadedEventArgs
} from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

export enum DashboardWidget {
  TimesheetSummary = 1,
  MostvsLeastCounts = 2,
  TaskWiseHoursDetails = 3,
  TimerWidget = 4,
  FeesSummary = 10,
  InvoiceAmountByCategory = 13,
  IncomeTrend = 16,
  RevenueFlow = 17,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  public layoutColor: string = '';
  public cellSpacing: number[] = [15, 15];
  public cellAspectRatio: number = 1.5;
  dashboardWidget = DashboardWidget;

  userWidgetsList: any[] = [];
  timeDashboardSummary: any;
  feesDashboardSummary: any;
  mostLeastCount: any;

  //#region Task Wise Hours Chart
  public primaryXAxis?: Object;
  public chartData?: Object[];
  public title?: string;
  primaryYAxis: any;
  public tooltip?: Object = {
    enable: true,
    format: '<span>${point.x}</span> : <span>${point.y}h</span>',
  };
  public palette?: string[];
  public legend: Object = {
    visible: false,
    enableHighlight: true,
  };

  seriesData: any = [];
  dashboardRequestModel: any;
  filter = 1;
  start: string = '';
  end: string = '';
  taskWiseHoursDetails: any;
  taskId = '';
  //#endregion

  //#region Income Trend
  public data: Object[] = [
    { x: 'Jan', y: 90 },
    { x: 'Feb', y: 80 },
    { x: 'Mar', y: 50 },
    { x: 'Apr', y: 70 },
    { x: 'May', y: 30 },
    { x: 'Jun', y: 10 },
    { x: 'Jul', y: 100 },
    { x: 'Aug', y: 55 },
    { x: 'Sep', y: 20 },
    { x: 'Oct', y: 40 },
    { x: 'Nov', y: 45 },
    { x: 'Dec', y: 75 },
  ];
  public data1: Object[] = [
    { x: 'Jan', y: 40 },
    { x: 'Feb', y: 90 },
    { x: 'Mar', y: 80 },
    { x: 'Apr', y: 30 },
    { x: 'May', y: 80 },
    { x: 'Jun', y: 40 },
    { x: 'Jul', y: 30 },
    { x: 'Aug', y: 95 },
    { x: 'Sep', y: 50 },
    { x: 'Oct', y: 20 },
    { x: 'Nov', y: 15 },
    { x: 'Dec', y: 45 },
  ];

  //Initializing Primary X Axis
  public primaryXAxisIncomeTrend: Object = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    valueType: 'Category',
    labelRotation: Browser.isDevice ? -45 : 0,
    labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
  };
  //Initializing Primary Y Axis
  public primaryYAxisIncomeTrend: Object = {
    // title: 'Expense',
    lineStyle: { width: 0 },
    minimum: 0,
    // maximum: 400,
    interval: 100,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '£ {value}',
  };
  public tooltipIncomeTrend: Object = {
    enable: true,
  };
  public legendIncomeTrend: Object = {
    visible: true,
    enableHighlight: true,
  };
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ?? 'Material';
    args.chart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
    );
  }
  // custom code end
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  public width: string = Browser.isDevice ? '100%' : '100%';
  public marker: Object = {
    visible: true,
    height: 7,
    width: 7,
    shape: 'Circle',
    isFilled: true,
  };
  public marker1: Object = {
    visible: true,
    height: 7,
    width: 7,
    shape: 'Diamond',
    isFilled: true,
  };
  public marker2: Object = {
    visible: true,
    height: 5,
    width: 5,
    shape: 'Rectangle',
    isFilled: true,
  };
  public marker3: Object = {
    visible: true,
    height: 6,
    width: 6,
    shape: 'Triangle',
    isFilled: true,
  };
  //#endregion

  //#region Revenue Flow
  public primaryXAxisRevenueFlow?: Object;
  public chartDataRevenueFlow?: Object[];
  public titleRevenueFlow?: string;
  public primaryYAxisRevenueFlow?: Object;
  public tooltipRevenueFlow: Object = {
    enable: true,
    header: '<b>£ {point.tooltip}</b>',
    shared: true,
  };
  //#endregion

  //#region Invoice Amount By Category
  public dataInvoiceAmountByCategory: Object[] = [
    { x: 'Adhoc', y: 60, text: '50%' },
    { x: 'Services', y: 30, text: '30%' },
    { x: 'Expense', y: 10, text: '20%' },
  ];
  //Initializing Legend
  public legendSettingsInvoiceAmountByCategory: Object = {
    visible: true,
    toggleVisibility: false,
    position: Browser.isDevice ? 'Bottom' : 'Right',
    height: Browser.isDevice ? '40%' : '60%',
    width: Browser.isDevice ? '60%' : '40%',
    textWrap: 'Wrap',
    maximumLabelWidth: 200,
  };
  // public title: string = Browser.isDevice ? "Browser Market Share" : '';
  public innerRadius: string = '70%';
  public startAngle: number = 40;
  public radius: string = '90%';
  //Initializing Datalabel
  public dataLabelInvoiceAmountByCategory: Object = {
    name: 'text',
    visible: true,
    font: {
      color: '#ffffff',
    },
  };

  // custom code start
  public loadInvoiceAmountByCategory(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ?? 'Material';
    args.accumulation.theme = <AccumulationTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
    );
  }
  public tooltipInvoiceAmountByCategory: Object = {
    enable: true,
    format: '<span>${point.x}</span> : £ <span>${point.y}%</span>',
    header: '',
  };

  public paletteInvoiceAmountByCategory?: string[];
  //#endregion

  constructor(public datepipe: DatePipe) {
    this.timeDashboardSummary = {
      totalAvailableClients: 3,
      totalWorkingClients: 0,
      clientScore: 0,
      totalClientDifference: 2,
      totalAvailableTasks: 3,
      totalWorkingTasks: 0,
      taskScore: 0,
      totalTaskDifference: 2,
      totalAvailableUsers: 7,
      totalWorkingUsers: 0,
      userScore: 0,
      totalUserDifference: 0,
      totalCapacity: '205h 00m',
      totalTimeSpent: '00h 00m',
      timeScore: 0,
      totalTimeDifference: '00:00',
    };

    this.mostLeastCount = {
      mostProfitableTaskName: 'N/A',
      mostProfitableTaskAmount: null,
      leastProfitableTaskName: 'N/A',
      leastProfitableTaskAmount: null,
      mostTimeTakingTaskName: 'N/A',
      mostTimeTakingTaskHours: null,
      leastTimeTakingTaskName: 'N/A',
      leastTimeTakingTaskHours: null,
      mostProfitableClientName: 'N/A',
      mostProfitableClientAmount: null,
      leastProfitableClientName: 'N/A',
      leastProfitableClientAmount: null,
      mostTimeTakingClientName: 'N/A',
      mostTimeTakingClientHours: null,
      leastTimeTakingClientName: 'N/A',
      leastTimeTakingClientHours: null,
      mostWorkingUserNameByAmount: 'N/A',
      mostWorkingUserByAmount: null,
      leastWorkingUserNameByAmount: 'N/A',
      leastWorkingUserByAmount: null,
      mostWorkingUserNameByTime: 'N/A',
      mostWorkingUserHours: null,
      leastWorkingUserNameByTime: 'N/A',
      leastWorkingUserHours: null,
    };

    this.feesDashboardSummary = {
      totalInvoiceAmount: 5160.0,
      totalInvoiceScore: 0,
      totalInvoiceAmountDifference: 0.0,
      totalPaidInvoiceAmount: 780.0,
      totalPaidInvoiceScore: 0,
      totalPaidInvoiceAmountDifference: 0.0,
      totalUnPaidInvoiceAmount: 4380.0,
      totalUnPaidInvoiceScore: 0,
      totalUnPaidInvoiceAmountDifference: 0.0,
      totalOverdueAmount: 0.0,
      totalOverdueScore: 0,
      totalOverdueAmountDifference: 0.0,
    };
  }

  ngOnInit(): void {
    this.addWidgetClick();
    this.bindTaskWiseHoursDetails();
    this.bindRevenueFlowDetails();
    this.bindInvoiceAmountByCategoryDetails();

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }

  onDragStop(event: any): void {}

  onCloseIcon(widget: any, event: any): void {}

  addWidgetClick(): void {
    // setTimeout(() => {
    this.userWidgetsList = [
      {
        widgetId: 1,
        widgetTypeName: 'Time Section Charts',
        widgetTypeId: 1,
        widgetName: 'Summary',
        isEnable: true,
        sortOrder: 1,
        iconName: null,
      },
      {
        widgetId: 2,
        widgetTypeName: 'Time Section Charts',
        widgetTypeId: 1,
        widgetName: 'Most vs. Least Counts',
        isEnable: true,
        sortOrder: 2,
        iconName: 'assets/images/column-chart.svg',
      },
      {
        widgetId: 3,
        widgetTypeName: 'Time Section Charts',
        widgetTypeId: 1,
        widgetName: 'Task Wise Hours Details',
        isEnable: true,
        sortOrder: 3,
        iconName: 'assets/images/column-chart.svg',
      },
      {
        widgetId: 4,
        widgetTypeName: 'Time Section Charts',
        widgetTypeId: 1,
        widgetName: 'Timer Widget',
        isEnable: true,
        sortOrder: 4,
        iconName: 'assets/images/pie-chart.svg',
      },
      {
        widgetId: 10,
        widgetTypeName: 'Fees Section Charts',
        widgetTypeId: 2,
        widgetName: 'Fees Summary',
        isEnable: true,
        sortOrder: 10,
        iconName: null,
      },
      {
        widgetId: 16,
        widgetTypeName: 'Fees Section Charts',
        widgetTypeId: 2,
        widgetName: 'Income Trend',
        isEnable: true,
        sortOrder: 16,
        iconName: '',
      },
      {
        widgetId: 17,
        widgetTypeName: 'Fees Section Charts',
        widgetTypeId: 2,
        widgetName: 'Revenue Flow',
        isEnable: true,
        sortOrder: 17,
        iconName: '',
      },
      {
        widgetId: 13,
        widgetTypeName: 'Fees Section Charts',
        widgetTypeId: 2,
        widgetName: 'Invoice Amount by Category',
        isEnable: true,
        sortOrder: 12,
        iconName: '',
      },
    ];
    // }, 1000);
  }

  bindTaskWiseHoursDetails(): void {
    //#region  Task Wise Hours Chart Details
    this.palette = ['#B9DD94', '#93CAF0', '#F1D071', '#C4C24A'];
    this.primaryXAxis = {
      interval: 1,
      valueType: 'Category',
    };

    this.taskWiseHoursDetails = {
      totalHours: '27:00',
      totalBillableHours: '24:00',
      totalNonBillableHours: '03:00',
      data: [
        {
          taskId: '6b1fb5fe-a32b-ee11-a9c1-00224801b1f2',
          name: 'Accounts production ',
          data: [
            {
              x: 'Monday',
              y: 15,
              tooltipMappingName: null,
            },
            {
              x: 'Tuesday',
              y: 12,
              tooltipMappingName: null,
            },
            {
              x: 'Wednesday',
              y: 0,
              tooltipMappingName: null,
            },
            {
              x: 'Thursday',
              y: 0,
              tooltipMappingName: null,
            },
            {
              x: 'Friday',
              y: 0,
              tooltipMappingName: null,
            },
            {
              x: 'Saturday',
              y: 0,
              tooltipMappingName: null,
            },
          ],
        },
      ],
    };

    if (this.taskWiseHoursDetails) {
      this.seriesData = this.taskWiseHoursDetails.data;
    } else {
      this.seriesData = [];
    }

    window.dispatchEvent(new Event('resize'));

    //#endregion
  }

  bindRevenueFlowDetails(): void {
    this.tooltipRevenueFlow = { enable: true };
    this.chartDataRevenueFlow = [
      { country: 'Sun', gold: 12 },
      { country: 'Mon', gold: 10 },
      { country: 'Tue', gold: 9 },
      { country: 'Wed', gold: 18 },
      { country: 'Thu', gold: 10 },
      { country: 'Fri', gold: 17 },
      { country: 'Sat', gold: 8 },
    ];
    this.primaryXAxisRevenueFlow = {
      valueType: 'Category',
    };
    this.primaryYAxisRevenueFlow = {
      minimum: 0,
      // maximum: 100
    };
  }

  bindInvoiceAmountByCategoryDetails(): void {
    this.paletteInvoiceAmountByCategory = [
      '#B9DD94',
      '#7CB5EC',
      '#E4E4E4',
      '#F2816F',
      '#BFBBE9',
      '#FFD1A7',
      '#7CB5EC',
    ];
  }
}
