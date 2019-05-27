import { Component, OnInit } from '@angular/core';
import { LoadEnrichmentEntriesAction } from './actions';
import { Store, select } from '@ngrx/store';
import { State, getEntryItems } from './reducers';
import { EnrichmentEntry } from './models';
import { Observable } from 'rxjs';

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
