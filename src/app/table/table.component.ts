import { Component, OnInit } from '@angular/core';
import { ServicesTestService } from '../services-test.service'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
public tables =[]
  constructor(private services:ServicesTestService) { }
  ngOnInit() {
    this.tables = this.services.Tables()
  }

}
