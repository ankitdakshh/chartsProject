// chart-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from '../../state/chart.model';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.css'],
})
export class ChartListComponent {
  @Input() charts: Chart[] | null = [];
  @Output() edit = new EventEmitter<Chart>();
  @Output() delete = new EventEmitter<string>();

  Highcharts: typeof Highcharts = Highcharts;
  displayedColumns: string[] = ['name', 'type', 'color', 'actions'];

  editChart(chart: Chart): void {
    this.edit.emit(chart);
  }

  deleteChart(id: string): void {
    this.delete.emit(id);
  }
}
