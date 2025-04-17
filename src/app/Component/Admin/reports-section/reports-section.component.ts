import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Chart,
  ChartConfiguration,
  ChartOptions,
  registerables
} from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-reports-section',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './reports-section.component.html',
  styleUrls: ['./reports-section.component.css'],
})
export class ReportsSectionComponent {
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.prepareBarChartData();
      this.prepareDoughnutChartData();
    }
  }

  jobs = [
    { title: 'Networking Engineer', category: 'Dev', status: 'Active' },
    { title: 'UX Designer', category: 'Design', status: 'Active' },
    { title: 'QA Tester', category: 'QA', status: 'Remove' },
    { title: 'System Admin', category: 'Dev', status: 'Active' },
    { title: 'Front-end Dev', category: 'Dev', status: 'Active' },
    { title: 'UI Artist', category: 'Design', status: 'Active' },
  ];


  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      data: [40, 60, 50, 80],
      label: 'Reports',
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

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { point: { radius: 0 } }
  };


  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } }
  };


  doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: []
  };

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };


  prepareBarChartData() {
    const categoryCounts: Record<string, number> = {};
    this.jobs.forEach(job => {
      categoryCounts[job.category] = (categoryCounts[job.category] || 0) + 1;
    });

    this.barChartData = {
      labels: Object.keys(categoryCounts),
      datasets: [{
        data: Object.values(categoryCounts),
        label: 'Jobs',
        backgroundColor: ['#0d6efd', '#ffc107', '#198754']
      }]
    };
  }


  prepareDoughnutChartData() {
    const statusCounts: Record<string, number> = {};
    this.jobs.forEach(job => {
      statusCounts[job.status] = (statusCounts[job.status] || 0) + 1;
    });
    this.doughnutChartData = {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: ['#198754', '#dc3545'],
        borderWidth: 0
      }]
    };
  }
}
