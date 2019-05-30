import { createSelector } from '@ngrx/store';

import * as fromActions from '../actions';
import { EnrichmentEntry } from '../models';

export interface State {
  loading: boolean;
  items: EnrichmentEntry[];
}

const initialState: State = {
  loading: false,
  items: []
};

export function reducer(state: State = initialState, action: fromActions.EnrichmentEntriesAction): State {
  switch (action.type) {
    case fromActions.LOAD_ENRICHMENT_ENTRIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromActions.LOAD_ENRICHMENT_ENTRIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    }
    case fromActions.LOAD_ENRICHMENT_ENTRIES_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
  }
  return state;
}

export function getEnrichmentEntriesState(state: any): State {
  return state['enrichment-entries'];
}

export const getEntryItems = createSelector(
  getEnrichmentEntriesState,
  (state: State) => state.items
);
