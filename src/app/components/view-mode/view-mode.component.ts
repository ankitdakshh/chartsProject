import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Chart } from '../../state/chart.model';
import { AppState } from '../../state/state.module';
import { loadCharts } from '../../state/chart.actions';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css'],
})
export class ViewModeComponent implements OnInit {
  charts$: Observable<Chart[]>;

  constructor(private store: Store<AppState>) {
    this.charts$ = this.store.select((state) => state.charts.charts);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCharts());
  }
}
