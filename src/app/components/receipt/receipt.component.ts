import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';
import { HttpClient } from '@angular/common/http';
import { ReceiptService } from 'src/app/services/receipt.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  receipts: Receipt[] = [];
  dataLoaded = false; 
  filter = ""
  
  constructor(private receiptService: ReceiptService,
  private activatedRoute:ActivatedRoute, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getReceipts();
 
  }

  createreceipt(receipt: any) {
    throw new Error('Method not implemented.');
  }

  getReceipts() {
    this.receiptService.getReceipts().subscribe((response) => {
      this.receipts = response.data;
      console.log(response.data)
      this.dataLoaded = true;
    });
  }
  delete(receiptid:string){
    this.receiptService.deleteReceipts(receiptid).subscribe(response => {
      console.log(response)
      this.getReceipts();
    
    })
    }

  

    
  }

