import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Paste from 'src/models/Paste';
import { PasteService } from '../services/paste.service';

@Component({
  selector: 'app-paste-view',
  templateUrl: './paste-view.component.html',
  styleUrls: ['./paste-view.component.css']
})
export class PasteViewComponent {

  paste_content: Paste = { id: -1, date: 0, uuid: "", title: "", text: "", deletekey: "" };
  host = "";

  constructor(private route: ActivatedRoute, private title: Title) {
    this.host = document.location.host;
    this.route.data.subscribe(
      (v) => { this.paste_content = v?.["paste"] }
    )
  }

  getDate(): string {
    //return new Date().toString();
    return new Date(this.paste_content.date ?? "").toString()
  }

}
