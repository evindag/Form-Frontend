import { Component, OnInit } from '@angular/core';
import { Check } from 'src/app/models/check';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  checks: Check[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
