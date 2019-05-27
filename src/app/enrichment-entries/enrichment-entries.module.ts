import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EnrichmentEntriesEffects } from './effects';
import { EnrichmentEntriesRoutingModule } from './enrichment-entries-routing.module';
import { EnrichmentEntriesComponent } from './enrichment-entries.component';
import { reducer } from './reducers';


@NgModule({
  declarations: [EnrichmentEntriesComponent],
  imports: [
    CommonModule,
    EnrichmentEntriesRoutingModule,
    StoreModule.forFeature('enrichment-entries', reducer),
    EffectsModule.forFeature([ EnrichmentEntriesEffects ])
  ]
})
export class EnrichmentEntriesModule { }
