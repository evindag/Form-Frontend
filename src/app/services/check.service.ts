import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Check } from '../models/check';
import * as ListResponseModel from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CheckService {
  apiUrl = 'https://localhost:44351/api/Checks/GetAll';
  constructor(private httpClient: HttpClient) { }

  getChecks():Observable<ListResponseModel.ListResponseModel<Check>> {
    return this.httpClient.get<ListResponseModel.ListResponseModel<Check>>(this.apiUrl);
      
      }
}
