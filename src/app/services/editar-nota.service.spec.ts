import { TestBed } from '@angular/core/testing';

import { EditarNotaService } from './editar-nota.service';

describe('EditarNotaService', () => {
  let service: EditarNotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarNotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
