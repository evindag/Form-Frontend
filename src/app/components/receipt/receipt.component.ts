import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';
import { HttpClient } from '@angular/common/http';
import { ReceiptService } from 'src/app/services/receipt.service';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  receipts: Receipt[] = [];
  dataLoaded = false;

  constructor(private receiptService: ReceiptService) {}

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
}
