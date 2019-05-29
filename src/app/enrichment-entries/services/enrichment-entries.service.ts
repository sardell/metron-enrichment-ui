import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { EnrichmentEntry } from '../models';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class EnrichmentEntriesService {

  constructor(private http: HttpClient) {}

  public getAllByType(type: string): Observable<EnrichmentEntry[]> {
    return this.http.get(`http://localhost:3000/api/v1/enrichments/${type}/entries`)
      .pipe(
        map((entries: EnrichmentEntry[]) => {
          return entries;
        }),
        catchError((res: HttpErrorResponse) => {
          return throwError(res);
        })
      );
  }
}
