import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnrichmentTypesListComponent } from './enrichment-types-list/enrichment-types-list.component';

export const routes: Routes = [
    { path: 'enrichments/types', component: EnrichmentTypesListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EnrichmentTypesRoutingModule { }