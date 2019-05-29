import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
// import { NzInputModule } from 'ng-zorro-antd';

import { EnrichmentTypesService } from '../enrichment-types.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-enrichment-types-list',
  templateUrl: './enrichment-types-list.component.html',
  styleUrls: ['./enrichment-types-list.component.scss']
})
export class EnrichmentTypesListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('filterTypeInput') filterTypeInput: ElementRef;
  inputValue: string | null;
  types: string[];
  filteredTypes: string[];
  enrichmentTypeSubscription: Subscription;

  constructor(private enrichmentTypesService: EnrichmentTypesService) { }

  ngOnInit() {
    this.enrichmentTypeSubscription = this.enrichmentTypesService.getAvailableEnrichments().subscribe(types => {
      this.types = types;
      this.filteredTypes = types;
    });
  }

  ngAfterViewInit() {
    fromEvent(this.filterTypeInput.nativeElement, 'keyup')
      .pipe(debounceTime(250))
      .subscribe(e => {
        this.filterTypesList(e[`target`].value);
      });
  }

  ngOnDestroy() {
    this.enrichmentTypeSubscription.unsubscribe();
  }

  filterTypesList(val: string) {
    if (!val) {
      return this.filteredTypes = this.types;
    }
    const words = val.trim().split(' ');
    this.filteredTypes = this.types.filter(type => {
      return words.every(word => type.toLowerCase().includes(word.toLowerCase()));
    });
  }

  clearFilter() {
    this.inputValue = null;
    this.filteredTypes = this.types;
  }

}
