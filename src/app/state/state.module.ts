import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment'; // Adjust the path as necessary

import { chartReducer } from './chart.reducer';
import { ChartEffects } from './chart.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ chart: chartReducer }),
    EffectsModule.forRoot([ChartEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class StateModule {}
