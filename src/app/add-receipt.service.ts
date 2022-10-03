import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from './models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AddReceiptService {

  apiUrl = 'https://localhost:44351/api/';
  constructor(private httpClient: HttpClient) { }

  // addReceipts(id:string,):Observable<ResponseModel> {
  //       let newPath= this.apiUrl+"Receipt/Add?id=" + id
  //       return this.httpClient.get<ResponseModel>(newPath);
          
  //         }
}
