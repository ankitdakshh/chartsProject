import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ChartModalComponent } from '../chart-modal/chart-modal.component';
import { Chart } from '../../state/chart.model';
import { AppState } from '../../state/state.module';
import { addChart, removeChart, updateChart } from '../../state/chart.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  charts$: Observable<Chart[]>;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    this.charts$ = this.store.select((state) => state.charts.charts);
  }

  ngOnInit(): void {}

  openAddModal(): void {
    const dialogRef = this.dialog.open(ChartModalComponent, {
      width: '300px',
      data: {
        chart: { id: '', name: '', type: '', color: '', data: [] },
        isNew: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(addChart({ chart: result }));
      }
    });
  }

  openEditModal(chart: Chart): void {
    const dialogRef = this.dialog.open(ChartModalComponent, {
      width: '300px',
      data: { chart, isNew: false },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(updateChart({ chart: result }));
      }
    });
  }

  deleteChart(id: string): void {
    this.store.dispatch(removeChart({ id }));
  }
}
