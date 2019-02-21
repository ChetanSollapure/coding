import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
page:object;
  constructor(private _contentService: ContentService) { }

  ngOnInit() {
    this.page = this._contentService.pages['contact']
  }

}
