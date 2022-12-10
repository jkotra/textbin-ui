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

  constructor(private route: ActivatedRoute, private router: Router, private title: Title, private ps: PasteService) {
    this.host = document.location.host;
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state !== undefined) {
      console.log("State =>", this.paste_content)
      this.paste_content = state as Paste;
      return
    }
  }

  ngOnInit(): void {

    const uuid = this.route.snapshot.paramMap.get("id");
    console.log("URL uuid =>", uuid);
    if (uuid !== null && this.paste_content.id == -1) {
      this.ps.get(uuid).subscribe(
        {
          next: (v: Paste) => {
            console.log("GET", v);
            this.paste_content = v;
            this.title.setTitle(`TextBin - ${v.title}`);
          },
          error: (err: any) => {
            console.error(err);
            this.router.navigate(["404"]);
          }
        }
      )
    }

  }

  getDate(): string {
    return new Date().toString();
    //return new Date(this.paste_content.date?).toString()
  }

}
