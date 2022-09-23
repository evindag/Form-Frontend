import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Receipt } from '../models/receipt';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  apiUrl = 'https://localhost:44351/api/';
  constructor(private httpClient: HttpClient) { }

  getReceipts():Observable<ListResponseModel<Receipt>> {
    let newPath= this.apiUrl+"Receipt/GetAll"
    return this.httpClient.get<ListResponseModel<Receipt>>(newPath);
      
      }
}

