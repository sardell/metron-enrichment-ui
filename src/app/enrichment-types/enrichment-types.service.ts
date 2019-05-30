import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrichmentTypesService {
  url = 'api/v1/sensor/enrichment/config';

  constructor(
    private http: HttpClient,
    private messageService: NzMessageService
  ) {}

  public getAvailableEnrichments(): Observable<string[]> {
    return this.http
      .get<string[]>(this.url + '/list/available/enrichments')
      .pipe(
        map((res: string[]) => res),
        catchError((error: any) => {
          this.messageService.create('error', error.message);
          return of(error);
        })
      );
  }
}
