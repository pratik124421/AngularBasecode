import { TestBed } from '@angular/core/testing';

import { ProductListResolverResolver } from './product-list-resolver.resolver';

describe('ProductListResolverResolver', () => {
  let resolver: ProductListResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductListResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
