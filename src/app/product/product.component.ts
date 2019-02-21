import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
page :object;
  constructor(private _contentService:ContentService) { }

  ngOnInit() {
    this.page = this._contentService.pages['product'];
  }

}
