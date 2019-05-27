import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrichmentEntriesModule } from './enrichment-entries/enrichment-entries.module';

registerLocaleData(en);

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
    StoreDevtoolsModule.instrument(),
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    EnrichmentEntriesModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
