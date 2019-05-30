import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { EnrichmentTypesService } from './enrichment-types.service';

let mockBackend: HttpTestingController;
let injector: TestBed;
let enrichmentTypesService: EnrichmentTypesService;
const FAKE_ENRICHMENT_TYPES_MOCK = ['enrichment1', 'enrichment2'];

describe('EnrichmentTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    enrichmentTypesService = injector.get(EnrichmentTypesService);
    mockBackend = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: EnrichmentTypesService = TestBed.get(EnrichmentTypesService);
    expect(service).toBeTruthy();
  });

  describe('getAvailableEnrichments()', () => {
    it('should return an Observable<string[]>', () => {
      const responseMock: string[] = FAKE_ENRICHMENT_TYPES_MOCK;
      let response;

      enrichmentTypesService.getAvailableEnrichments().subscribe(r => {
        response = r;
        expect(response).toBeTruthy();
      });

      const req = mockBackend.expectOne(
        `api/v1/sensor/enrichment/config/list/available/enrichments`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(responseMock);
    });
  });
});
