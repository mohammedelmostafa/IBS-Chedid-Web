import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionMasterTableFiltersComponent } from './pages/production/production-master-table-filters/production-master-table-filters.component';
import { MasterTablesRoutingModule } from './master-tables-routing.module';
import { ProductionMasterTablesPageComponent } from './pages/production/production-master-tables-page/production-master-tables-page.component';
import { SystemAdminPageComponent } from './pages/system-admin/system-admin-page/system-admin-page.component';
import { SystemAdminTableComponent } from './pages/system-admin/system-admin-table/system-admin-table.component';

/**
 * This module contains all of the components that belong to the master tables module
*/

@NgModule({

   /* Add the components here */
   declarations: [
      ProductionMasterTablesPageComponent,
      ProductionMasterTableFiltersComponent,
      SystemAdminPageComponent,
      SystemAdminTableComponent
   ],

   imports: [
      CommonModule,
      MasterTablesRoutingModule
   ]

})

export class MasterTablesModule { }
