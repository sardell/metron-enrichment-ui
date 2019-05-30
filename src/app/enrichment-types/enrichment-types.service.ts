import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrichmentTypesService {
  url = 'api/v1/sensor/enrichment/config';

  constructor(private http: HttpClient) { }

  public getAvailableEnrichments(): Observable<string[]> {
    return this.http.get<string[]>(this.url + '/list/available/enrichments').pipe();
  }
}
