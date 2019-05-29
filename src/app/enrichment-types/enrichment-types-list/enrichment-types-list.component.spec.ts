import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { NzInputModule, NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { EnrichmentTypesListComponent } from './enrichment-types-list.component';
import { EnrichmentTypesService } from '../enrichment-types.service';

class FakeEnrichmentTypesService {
  getAvailableEnrichments() {
    return of(['enrichment type 1', 'enrichment type 2']);
  }
}

describe('EnrichmentTypesListComponent', () => {
  let component: EnrichmentTypesListComponent;
  let fixture: ComponentFixture<EnrichmentTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NzInputModule,
        NgZorroAntdModule,
        FormsModule
      ],
      declarations: [EnrichmentTypesListComponent],
      providers: [
        {
          provide: EnrichmentTypesService,
          useClass: FakeEnrichmentTypesService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichmentTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a filter input', () => {
    expect(
      fixture.debugElement.query(
        By.css('[data-qe-id="enrichment-type-filter-input"]')
      )
    ).toBeDefined();
  });

  it('should only display Enrichment Types that match filter input', fakeAsync(() => {
    const filter = fixture.nativeElement.querySelector(
      '[data-qe-id="enrichment-type-filter-input"]'
    );

    component.ngOnInit();
    component.ngAfterViewInit();
    expect(component.filteredTypes.length).toBe(2);

    filter.value = '1';
    filter.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    tick(300);
    expect(component.filteredTypes.length).toBe(1);

    filter.value = 'abcd';
    filter.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    tick(300);
    expect(component.filteredTypes.length).toBe(0);

    filter.value = '';
    filter.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    tick(300);
    expect(component.filteredTypes.length).toBe(2);
  }));

  it('should display all filter options and clear input when clear icon is clicked', fakeAsync(() => {
    const filter = fixture.nativeElement.querySelector(
      '[data-qe-id="enrichment-type-filter-input"]'
    );

    filter.value = 'abcd';
    filter.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    tick(300);
    expect(component.filteredTypes.length).toBe(0);

    component.clearFilter();
    expect(component.filteredTypes.length).toBe(2);
  }));
});
