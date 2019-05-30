import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NzGridModule } from 'ng-zorro-antd';

import { EnrichmentTypesModule } from '../enrichment-types/enrichment-types.module';

import { EnrichmentEntriesEffects } from './effects';
import { EnrichmentEntriesRoutingModule } from './enrichment-entries-routing.module';
import { EnrichmentEntriesComponent } from './enrichment-entries.component';
import { reducer } from './reducers';


@NgModule({
  declarations: [EnrichmentEntriesComponent],
  imports: [
    CommonModule,
    EnrichmentEntriesRoutingModule,
    EnrichmentTypesModule,
    NzGridModule,
    StoreModule.forFeature('enrichment-entries', reducer),
    EffectsModule.forFeature([ EnrichmentEntriesEffects ])
  ]
})
export class EnrichmentEntriesModule { }
