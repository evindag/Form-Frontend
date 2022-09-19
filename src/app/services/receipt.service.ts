import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as ListResponseModel from '../models/ListResponseModel';
import { Receipt } from '../models/receipt';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  apiUrl = 'https://localhost:44351/api/Receipt/GetAll';
  constructor(private httpClient: HttpClient) { }

  getReceipts():Observable<ListResponseModel.ListResponseModel<Receipt>> {
    return this.httpClient.get<ListResponseModel.ListResponseModel<Receipt>>(this.apiUrl);
      
      }
}
