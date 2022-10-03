import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Receipt } from '../models/receipt';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  Add(receiptModel: any) {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'https://localhost:44351/api/';
  constructor(private httpClient: HttpClient) { }

  getReceipts():Observable<ListResponseModel<Receipt>> {
    let newPath= this.apiUrl+"Receipt/GetAll"
    return this.httpClient.get<ListResponseModel<Receipt>>(newPath);
      
      }
  deleteReceipts(id:string):Observable<ResponseModel> {
        let newPath= this.apiUrl+"Receipt/Delete?id=" + id
        return this.httpClient.get<ResponseModel>(newPath);
          
          }
          
add(receipt:Receipt){
 return this.httpClient.post(this.apiUrl+"Receipt/Add",receipt)
      
      }
}

