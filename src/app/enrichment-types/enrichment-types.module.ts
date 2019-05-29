import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule, NgZorroAntdModule } from 'ng-zorro-antd';

import { EnrichmentTypesRoutingModule } from './enrichment-types.routing';
import { EnrichmentTypesListComponent } from './enrichment-types-list/enrichment-types-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EnrichmentTypesListComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    NzInputModule,
    EnrichmentTypesRoutingModule
  ]
})
export class EnrichmentTypesModule { }
