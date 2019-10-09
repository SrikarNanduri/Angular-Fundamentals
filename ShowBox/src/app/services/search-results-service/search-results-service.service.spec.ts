import { TestBed } from '@angular/core/testing';

import { SearchResultsServiceService } from './search-results-service.service';

describe('SearchResultsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchResultsServiceService = TestBed.get(SearchResultsServiceService);
    expect(service).toBeTruthy();
  });
});
