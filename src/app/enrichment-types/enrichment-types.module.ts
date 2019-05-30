import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NzInputModule } from 'ng-zorro-antd';

import { EnrichmentTypesListComponent } from './enrichment-types-list/enrichment-types-list.component';

@NgModule({
  declarations: [EnrichmentTypesListComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
    NzInputModule,
  ],
  exports: [EnrichmentTypesListComponent]
})
export class EnrichmentTypesModule { }
