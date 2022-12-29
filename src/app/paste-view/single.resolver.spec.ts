import { TestBed } from '@angular/core/testing';

import { SingleResolver } from './single.resolver';

describe('SingleResolver', () => {
  let resolver: SingleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SingleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
