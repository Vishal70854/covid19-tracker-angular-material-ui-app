import { TestBed } from '@angular/core/testing';

import { JavatechieCovid19 } from './javatechie-covid19';

describe('JavatechieCovid19', () => {
  let service: JavatechieCovid19;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavatechieCovid19);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
