import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  receipts:Receipt[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
