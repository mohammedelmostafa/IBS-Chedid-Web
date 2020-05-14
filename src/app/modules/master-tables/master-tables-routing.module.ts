import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionMasterTablesPageComponent } from './pages/production/production-master-tables-page/production-master-tables-page.component';
import { SystemAdminPageComponent } from './pages/system-admin/system-admin-page/system-admin-page.component';

/**
 * This module contains all of the pages related to the master tables module
 * and their basic data which includes:
 * -  The page's URL path
 * -  The page's main component
 * -  The page's title
*/

const routes: Routes = [
   {
      path: '',
      data: {
         title: 'Master Tables'        // The module title
      },
      children: [

         /* Default page when accessing [ ibschedid.com/mastertables ] */
         {
            path: '',                  // When accessing [ ibschedid.com/mastertables/ <-- empty ('') child path ] 
            redirectTo: 'production',  // Redirect to the production page [ ibschedid.com/mastertables/production ]
         },

         /* Production page */
         {
            path: 'production',                              // ibschedid.com/mastertables/[production]<--
            component: ProductionMasterTablesPageComponent,  // The page main component
            data: {
               title: 'Production Yaseen'                           // The page title
            }
         },

         {
            path: 'system-admin',
            component: SystemAdminPageComponent,
            data: {
               title: 'System Admin'
            }
         }

         /* Add new pages routes here*/

      ]
   }
];


@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})

export class MasterTablesRoutingModule { }
