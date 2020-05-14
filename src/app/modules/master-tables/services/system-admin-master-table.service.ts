import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
   providedIn: 'root'
})

export class SystemAdminMasterTableService {

   constructor(
      private http: HttpClient
   ) { }


   getSystemAdminData() {
      return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
   }

}
