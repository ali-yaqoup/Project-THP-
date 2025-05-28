import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { JobService } from '../../services/job.service';
import {
  Chart,
  ChartConfiguration,
  ChartOptions,
  registerables
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { NgChartsModule } from 'ng2-charts';
import * as XLSX from 'xlsx';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-reports-section',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './reports-section.component.html',
  styleUrls: ['./reports-section.component.css'],
})
export class ReportsSectionComponent implements OnInit {
  activeCount = 0;
  deletedCount = 0;
  formPosts: any[] = [];
  isBrowser = false;

  reportCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e0e0e0'
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private jobService: JobService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.jobService.getAllUsers().subscribe((users) => {
        this.prepareMonthlyUserLineChart(users);
      });

      this.jobService.formPosts$.subscribe((posts) => {
        this.formPosts = posts;
        this.prepareBarChartData();
        this.prepareDoughnutChartData();
      });

      this.jobService.getDeletedPostCount().subscribe((res) => {
        this.deletedCount = res.count;
      });
    }
  }

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { display: true }, y: { display: true } },
    elements: { point: { radius: 4 } }
  };

  prepareMonthlyUserLineChart(users: any[]) {
    const monthlyCounts: Record<string, number> = {};
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    monthLabels.forEach(month => monthlyCounts[month] = 0);

    users.forEach(user => {
      if (user.created_at) {
        const date = new Date(user.created_at);
        const month = date.toLocaleString('en-US', { month: 'short' });
        if (monthlyCounts[month] !== undefined) {
          monthlyCounts[month]++;
        }
      }
    });

    this.lineChartData = {
      labels: monthLabels,
      datasets: [{
        data: monthLabels.map(month => monthlyCounts[month]),
        label: 'Users Created',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: '#0d6efd',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return 'rgba(13,110,253,0.1)';
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(13,110,253,0.2)');
          gradient.addColorStop(1, 'rgba(13,110,253,0)');
          return gradient;
        }
      }]
    };
  }

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#1f2937',
        titleColor: '#fff',
        bodyColor: '#f3f4f6',
        padding: 10,
        cornerRadius: 6
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: '#111827',
        font: {
          size: 13,
          weight: 'bold'
        },
        formatter: (value) => value === 0 ? '' : value
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#6b7280',
          font: { size: 14 }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e7eb'
        },
        ticks: {
          stepSize: 1,
          color: '#6b7280',
          font: { size: 13 }
        }
      }
    }
  };

  prepareBarChartData() {
    const monthlyCounts: Record<string, number> = {};
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    monthLabels.forEach(month => monthlyCounts[month] = 0);

    this.formPosts.forEach(post => {
      if (post.created_at) {
        const date = new Date(post.created_at);
        if (!isNaN(date.getTime())) {
          const month = date.toLocaleString('en-US', { month: 'short' });
          if (monthlyCounts.hasOwnProperty(month)) {
            monthlyCounts[month]++;
          }
        }
      }
    });

    const barColors = [
      '#f97316', '#3b82f6', '#10b981', '#f59e0b',
      '#6366f1', '#ec4899', '#14b8a6', '#ef4444',
      '#22c55e', '#eab308', '#8b5cf6', '#0ea5e9'
    ];

    this.barChartData = {
      labels: monthLabels,
      datasets: [{
        data: monthLabels.map(month => monthlyCounts[month]),
        label: 'Posts per Month',
        backgroundColor: barColors,
        borderRadius: 10,
        maxBarThickness: 40,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      }]
    };
  }

  doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: []
  };

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  };

  prepareDoughnutChartData() {
    const statusCounts: Record<string, number> = {};
    this.formPosts.forEach(post => {
      if (post.status) {
        const status = post.status.toLowerCase();
        statusCounts[status] = (statusCounts[status] || 0) + 1;
      }
    });

    this.doughnutChartData = {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: ['#198754', '#dc3545'],
        borderWidth: 0
      }]
    };

    this.activeCount = statusCounts['active'] || 0;
  }

  exportToExcel(data: any[], fileName: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = {
      Sheets: { Data: worksheet },
      SheetNames: ['Data']
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });

    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadMonthlyReport() {
    const data: any[] = [{ Section: 'Users Created Monthly' }];
    if (this.lineChartData.labels && this.lineChartData.datasets[0]) {
      this.lineChartData.labels.forEach((month: any, index: number) => {
        data.push({
          Month: month,
          Users: this.lineChartData.datasets[0].data[index]
        });
      });
    }
    this.exportToExcel(data, 'MonthlyReport.xlsx');
  }

  downloadCategoryReport() {
    const data: any[] = [{ Section: 'Posts per Month' }];
    if (this.barChartData.labels && this.barChartData.datasets[0]) {
      this.barChartData.labels.forEach((month: any, index: number) => {
        data.push({
          Month: month,
          Posts: this.barChartData.datasets[0].data[index]
        });
      });
    }
    this.exportToExcel(data, 'PostsPerMonth.xlsx');
  }

  downloadStatusReport() {
    const data: any[] = [{ Section: 'Jobs by Status' }];
    if (this.doughnutChartData.labels && this.doughnutChartData.datasets[0]) {
      this.doughnutChartData.labels.forEach((status: any, index: number) => {
        data.push({
          Status: status,
          Count: this.doughnutChartData.datasets[0].data[index]
        });
      });
    }
    this.exportToExcel(data, 'StatusReport.xlsx');
  }
}
