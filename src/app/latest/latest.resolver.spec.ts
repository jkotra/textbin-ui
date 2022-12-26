import { TestBed } from '@angular/core/testing';

import { LatestResolver } from './latest.resolver';

describe('LatestResolver', () => {
  let resolver: LatestResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LatestResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
