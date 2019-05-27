import { Action } from '@ngrx/store';
import { EnrichmentEntry } from '../models';

export const LOAD_ENRICHMENT_ENTRIES = '[Enrichment entries] load all start';
export const LOAD_ENRICHMENT_ENTRIES_SUCCESS = '[Enrichment entries] load all success';
export const LOAD_ENRICHMENT_ENTRIES_FAIL = '[Enrichment entries] load all fail';

export class LoadEnrichmentEntriesAction implements Action {
  readonly type = LOAD_ENRICHMENT_ENTRIES;
}

export class LoadEnrichmentEntriesSuccessAction implements Action {
  readonly type = LOAD_ENRICHMENT_ENTRIES_SUCCESS;
  constructor(public payload: EnrichmentEntry[]) {}
}

export class LoadEnrichmentEntriesFailAction implements Action {
  readonly type = LOAD_ENRICHMENT_ENTRIES_FAIL;
  constructor(public payload: any) {}
}

export type EnrichmentEntriesAction = LoadEnrichmentEntriesAction
  | LoadEnrichmentEntriesSuccessAction
  | LoadEnrichmentEntriesFailAction;
