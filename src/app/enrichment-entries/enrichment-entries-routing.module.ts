import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrichmentEntriesComponent } from './enrichment-entries.component';

const routes: Routes = [
  { path: 'enrichment-entries/:type', component: EnrichmentEntriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrichmentEntriesRoutingModule { }
