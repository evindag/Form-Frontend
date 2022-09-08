import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceiptResponseModel } from '../models/receiptResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  apiUrl = 'https://localhost:44351/api/Receipt/GetAll';
  constructor(private httpClient: HttpClient) { }

  getReceipts():Observable<ReceiptResponseModel> {
    return this.httpClient.get<ReceiptResponseModel>(this.apiUrl)
      
      };
}
