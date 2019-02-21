import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
page :object;
  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.page = this.contentService.pages['about']
  }

}
