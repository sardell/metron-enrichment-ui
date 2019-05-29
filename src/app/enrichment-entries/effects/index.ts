import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as fromActions from '../actions';
import { EnrichmentEntriesService } from '../services/enrichment-entries.service';
import { EnrichmentEntry } from '../models';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class EnrichmentEntriesEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.LOAD_ENRICHMENT_ENTRIES),
    switchMap((action: fromActions.EnrichmentEntriesAction) => {
      return this.service.getAllByType(action.payload)
        .pipe(
          map((entries: EnrichmentEntry[]) => {
            return new fromActions.LoadEnrichmentEntriesSuccessAction(entries);
          }),
          catchError((error: any) => {
            this.messageService.create('error', error.message);
            return of(new fromActions.LoadEnrichmentEntriesFailAction(error));
          })
        );
    })
  );

  constructor(
    private actions$: Actions,
    private service: EnrichmentEntriesService,
    private messageService: NzMessageService
  ) {}
}
