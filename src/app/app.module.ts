import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { EnrichmentEntriesModule } from './enrichment-entries/enrichment-entries.module';
import { EffectsModule } from '@ngrx/effects';

export const metaReducers: MetaReducer<{}>[] = !environment.production
? [storeFreeze]
: [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    EnrichmentEntriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
