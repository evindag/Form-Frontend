import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CheckComponent } from '../components/check/check.component';
import { Check } from '../models/check';
import { CheckService } from '../services/check.service';

@Component({
  selector: 'app-add-check',
  templateUrl: './add-check.component.html',
  styleUrls: ['./add-check.component.css']
})
export class AddCheckComponent implements OnInit {
  checkAddForm:FormGroup;
  check:Check;

  constructor(private formbuilder:FormBuilder,private checkService:CheckService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.addchecks();
  }
  addchecks(){
    this.checkAddForm=this.formbuilder.group({
          date:[' ',Validators.required],
          checkCost:[' ',Validators.required],
          description:[' ',Validators.required], 
          image:[' ',Validators.required], 
          company:[' ',Validators.required], 
          person:[' ',Validators.required], 
          address:[' ',Validators.required], 
        });

}
add(){
  if(this.checkAddForm.valid){
    let checkModel=Object.assign({},this.checkAddForm.value)
    console.log(checkModel)
    this.checkService.add(checkModel).subscribe(response=>{
      this.toastrService.success("Makbuz ekleme başarılı.")
      console.log("Başarılı")
    })
    
  } else{
      this.toastrService.error("Formunuz eksik.")
      console.log("Başarısız")

  }
  
}
}
