import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export enum DashboardWidget {
  TimesheetSummary = 1,
  MostvsLeastCounts = 2,
  TaskWiseHoursDetails = 3,
  TimerWidget = 4,
  FeesSummary = 10,
  InvoiceAmountByInvoiceMonth = 11,
  BalanceAmountByDueMonth = 12,
  InvoiceAmountByCategory = 13,
  TopClientsByInvoiceAmount = 14,
  TopClientsWithBalance = 15,
  IncomeTrend = 16,
  RevenueFlow = 17,
  PaymentMethods = 18,
  EstimatesStatus = 19,
  InvoiceStatus = 20,
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

  constructor() {
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
        widgetId: 11,
        widgetTypeName: 'Fees Section Charts',
        widgetTypeId: 2,
        widgetName: 'Invoice Amount by Invoice Month',
        isEnable: true,
        sortOrder: 11,
        iconName: 'assets/images/column-chart.svg',
      },
      {
        widgetId: 12,
        widgetTypeName: 'Fees Section Charts',
        widgetTypeId: 2,
        widgetName: 'Balance Amount by Due Month',
        isEnable: true,
        sortOrder: 12,
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
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 800);
  }

  onDragStop(event: any): void {}

  onCloseIcon(widget: any, event: any): void {}
}
