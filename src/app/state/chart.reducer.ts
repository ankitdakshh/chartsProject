import { createReducer, on, Action } from '@ngrx/store';
import { Chart } from './chart.model';
import * as ChartActions from './chart.actions';

export interface ChartState {
  charts: Chart[];
  error: any;
}

export const initialState: ChartState = {
  charts: [],
  error: null,
};

const reducer = createReducer(
  initialState,
  on(ChartActions.loadChartsSuccess, (state, { charts }) => ({
    ...state,
    charts,
    error: null,
  })),
  on(ChartActions.loadChartsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ChartActions.addChart, (state, { chart }) => ({
    ...state,
    charts: [...state.charts, chart],
  })),
  on(ChartActions.updateChart, (state, { chart }) => ({
    ...state,
    charts: state.charts.map((c) => (c.id === chart.id ? chart : c)),
  })),
  on(ChartActions.deleteChart, (state, { chartId }) => ({
    ...state,
    charts: state.charts.filter((c) => c.id !== chartId),
  }))
);

export function chartReducer(state: ChartState | undefined, action: Action) {
  return reducer(state, action);
}
