import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClipboardJS from 'clipboard';
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

  constructor(private route: ActivatedRoute, private router: Router, private title: Title, private ps: PasteService) {

    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state !== undefined) {
      console.log("State =>", this.paste_content)
      this.paste_content = state as Paste;
      return
    }

    this.route.data.subscribe(
      (v) => { this.paste_content = v?.["paste"] }
    )
  }

  ngOnInit(): void {
    new ClipboardJS('.btn');
    this.title.setTitle(`TextBin - ${this.paste_content.title}`)
  }

  deletePaste() {
    this.ps.delete(this.paste_content.uuid ?? "", this.paste_content.deletekey ?? "").subscribe(
      (resp) => {
        this.router.navigateByUrl("/")
      }
    )
  }

  getDate(): string {
    //return new Date().toString();
    return new Date(this.paste_content.date ?? "").toString()
  }

}
