import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChartState } from './chart.reducer';

export const selectChartState = createFeatureSelector<ChartState>('chart');

export const selectAllCharts = createSelector(
  selectChartState,
  (state: ChartState) => state.charts
);

export const selectChartError = createSelector(
  selectChartState,
  (state: ChartState) => state.error
);
