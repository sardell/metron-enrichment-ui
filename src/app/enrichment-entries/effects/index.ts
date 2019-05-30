import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LOAD_ENRICHMENT_ENTRIES, LoadEnrichmentEntriesSuccessAction } from '../actions';

@Injectable()
export class EnrichmentEntriesEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(LOAD_ENRICHMENT_ENTRIES),
    map(() => {
      /**
       * @TODO it's just temporarily hard coded until we have
       * a real data source up and running.
       */
      return new LoadEnrichmentEntriesSuccessAction([{
        key: '123',
        timestamp: 123,
        user: 'bob',
        value: 'lorem'
      }]);
    })
  );

  constructor(private actions$: Actions) {}
}
