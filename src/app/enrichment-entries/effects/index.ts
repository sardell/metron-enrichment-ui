import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as fromActions from '../actions';

@Injectable()
export class EnrichmentEntriesEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_ENRICHMENT_ENTRIES),
    map((/*action: fromActions.EnrichmentEntriesAction*/) => {
      /**
       * @TODO it's just temporarily hard coded until we have
       * a real data source up and running.
       */
      return new fromActions.LoadEnrichmentEntriesSuccessAction([{
        uuid: '123',
        timestamp: 123,
        user: 'bob',
        value: 'lorem'
      }, {
        uuid: '456',
        timestamp: 456,
        user: 'simon',
        value: 'ipsum'
      }, {
        uuid: '678',
        timestamp: 678,
        user: 'john',
        value: 'lorem'
      }]);
    })
  );

  constructor(private actions$: Actions) {}
}
