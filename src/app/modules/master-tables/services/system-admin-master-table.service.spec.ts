/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SystemAdminMasterTableService } from './system-admin-master-table.service';

describe('Service: SystemAdminMasterTable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemAdminMasterTableService]
    });
  });

  it('should ...', inject([SystemAdminMasterTableService], (service: SystemAdminMasterTableService) => {
    expect(service).toBeTruthy();
  }));
});
