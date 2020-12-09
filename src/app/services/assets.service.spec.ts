import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AssetsService } from './assets.service';

describe('AssetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AssetsService = TestBed.get(AssetsService);
    expect(service).toBeTruthy();
  });
});
