import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Check } from 'src/app/models/check';
import { CheckService } from 'src/app/services/check.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  checks: Check[] =[];
  filter = ""
  

  constructor(private checkService:CheckService,
    private activatedRoute:ActivatedRoute, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getChecks();
  }

  getChecks() {
    this.checkService.getChecks().subscribe((response) => {
      this.checks = response.data;
      console.log(response.data)
       
    });
  }

}
