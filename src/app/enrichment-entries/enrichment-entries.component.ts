import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoadEnrichmentEntriesAction } from './actions';
import { EnrichmentEntry } from './models';
import { getEntryItems, State } from './reducers';

@Component({
  selector: 'app-enrichment-entries',
  templateUrl: './enrichment-entries.component.html',
  styleUrls: ['./enrichment-entries.component.scss']
})
export class EnrichmentEntriesComponent implements OnInit {

  entries$: Observable<EnrichmentEntry[]>;

  constructor(private store: Store<State>) {
    this.entries$ = store.pipe(select(getEntryItems));
  }

  ngOnInit() {
    this.store.dispatch(new LoadEnrichmentEntriesAction());
  }

}
