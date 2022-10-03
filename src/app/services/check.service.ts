import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Check } from '../models/check';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  apiUrl = 'https://localhost:44351/api/Checks/GetAll';
  constructor(private httpClient: HttpClient) { }

  getChecks():Observable<ListResponseModel<Check>> {
    return this.httpClient.get<ListResponseModel<Check>>(this.apiUrl);
      
      }
      add(check:Check){
        return this.httpClient.post(this.apiUrl+"Check/Add",check)
             
             }
}
