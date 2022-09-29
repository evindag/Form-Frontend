import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';
import { HttpClient } from '@angular/common/http';
import { ReceiptService } from 'src/app/services/receipt.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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

  getReceipts() {
    this.receiptService.getReceipts().subscribe((response) => {
      this.receipts = response.data;
      console.log(response.data)
      this.dataLoaded = true;
    });
  }
  delete(receipt:Receipt){
    this.toastrService.remove(receipt.receiptId)
    }
  }

