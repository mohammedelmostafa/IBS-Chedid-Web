import { Component, OnInit } from '@angular/core';
import { SystemAdminMasterTableService } from '../../../services/system-admin-master-table.service';
import { SystemAdminData } from '../../../models/SystemAdminData';


@Component({
   selector: 'app-system-admin-table',
   templateUrl: './system-admin-table.component.html',
   styleUrls: ['./system-admin-table.component.css']
})

export class SystemAdminTableComponent implements OnInit {

   systemAdminDataRes: SystemAdminData;

   constructor(
      private systemAdminMasterTableService: SystemAdminMasterTableService
   ) { }

   ngOnInit(): void {
   }

   sendApiRequest() {
      this.systemAdminMasterTableService.getSystemAdminData().subscribe(
         (success: SystemAdminData) => {
            this.systemAdminDataRes = success;
         },
         error => console.log(error)
      );
   }

}
