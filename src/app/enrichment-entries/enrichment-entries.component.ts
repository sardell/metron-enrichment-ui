import { Component, OnInit } from '@angular/core';
import { LoadEnrichmentEntriesAction } from './actions';
import { Store, select } from '@ngrx/store';
import { State, getEntryItems, isLoading } from './reducers';
import { EnrichmentEntry } from './models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrichment-entries',
  templateUrl: './enrichment-entries.component.html',
  styleUrls: ['./enrichment-entries.component.scss']
})
export class EnrichmentEntriesComponent implements OnInit {

  entries$: Observable<EnrichmentEntry[]>;
  entries: EnrichmentEntry[];
  loading$: Observable<boolean>;
  checkedMap: { [key: string]: boolean } = {};
  allChecked = false;
  selectedType = '';

  constructor(
    private store: Store<State>,
    private activatedRoute: ActivatedRoute
  ) {
    this.entries$ = store.pipe(select(getEntryItems));
    this.entries$.subscribe((entries: EnrichmentEntry[]) => {
      this.entries = entries;
    });

    this.loading$ = store.pipe(select(isLoading));

    this.activatedRoute.params.subscribe((params) => {
      this.selectedType = params.type;
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadEnrichmentEntriesAction(this.selectedType));
  }

  onCheckAllChange(checked: boolean) {
    this.entries.forEach((entry: EnrichmentEntry) => {
      this.checkedMap[entry.uuid] = checked;
    });
    this.updateCheckStatus();
  }

  onCheckChange(checked: boolean, entry: EnrichmentEntry) {
    this.checkedMap[entry.uuid] = checked;
    this.updateCheckStatus();
  }

  updateCheckStatus() {
    this.allChecked = this.entries.every((entry: EnrichmentEntry) => {
      return !!this.checkedMap[entry.uuid];
    });
  }
}
