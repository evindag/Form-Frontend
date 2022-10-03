import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Receipt } from '../models/receipt';
import { ResponseModel } from '../models/responseModel';
import { ReceiptService } from '../services/receipt.service';



@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.css']
})
export class AddReceiptComponent implements OnInit {
  receiptAddForm:FormGroup;
  receipt:Receipt;
  datasaved=false;
  

  constructor(private formbuilder:FormBuilder,private receiptService:ReceiptService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.addreceipts();
  }
 

 addreceipts(){
this.receiptAddForm=this.formbuilder.group({
      date:[' ',Validators.required],
      receiptNo:[' ',Validators.required],
      company:[' ',Validators.required], 
      description:[' ',Validators.required], 
      receiptType:[' ',Validators.required], 
      cost:[' ',Validators.required], 
      vat:[' ',Validators.required], 
      totalCost:[' ',Validators.required], 
      image:[' ',Validators.required], 
      person:[' ',Validators.required] 
    });

  // if(this.receiptForm.valid){
  //   var receipt = Object.assign({},this.receiptForm.value)
  //   this.receiptService.AddReceipts(receipt).subscribe(receipt=>{
  //     this.datasaved=true;
  }
  add(){
    if(this.receiptAddForm.valid){
      let receiptModel=Object.assign({},this.receiptAddForm.value)
      console.log(receiptModel)
      this.receiptService.add(receiptModel).subscribe(response=>{
        this.toastrService.success("Fiş ekleme başarılı.")
        console.log("Başarılı")
      })
      
    } else{
        this.toastrService.error("Formunuz eksik.")
        console.log("Başarısız")

    }
    
  }
  }
 
  


