import { Component, OnInit } from '@angular/core';
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
  

  constructor(private checkService:CheckService) { }

  ngOnInit(): void {
    this.getChecks();
  }

  getChecks() {
    this.checkService.getChecks().subscribe((response) => {
      this.checks = response.data;
       
    });
  }

}
