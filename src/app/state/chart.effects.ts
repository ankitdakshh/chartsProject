import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ChartService } from '../services/chart.service';
import * as ChartActions from './chart.actions';

@Injectable()
export class ChartEffects {
  constructor(private actions$: Actions, private chartService: ChartService) {}

  loadCharts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChartActions.loadCharts),
      mergeMap(() =>
        this.chartService.getCharts().pipe(
          map((charts) => ChartActions.loadChartsSuccess({ charts })),
          catchError((error) => of(ChartActions.loadChartsFailure({ error })))
        )
      )
    )
  );
}
