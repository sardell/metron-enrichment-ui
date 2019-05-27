import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrichmentEntriesComponent } from './enrichment-entries.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { EnrichmentEntriesEffects } from './effects';
import { EnrichmentEntriesRoutingModule } from './enrichment-entries-routing.module';


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
