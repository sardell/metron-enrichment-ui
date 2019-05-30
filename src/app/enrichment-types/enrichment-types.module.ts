import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzInputModule } from 'ng-zorro-antd';

import { EnrichmentTypesListComponent } from './enrichment-types-list/enrichment-types-list.component';
import { EnrichmentTypesRoutingModule } from './enrichment-types.routing';


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
