import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Paste from 'src/models/Paste';
import { PasteService } from '../services/paste.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
})
export class LatestComponent {

  latest_pastes: Paste[] = [];

  constructor(private activatedR: ActivatedRoute, private title: Title) {
    title.setTitle("TextBin - Latest Pastes");
  }

  ngOnInit(): void {
    this.activatedR.data.subscribe(
      (v) => { this.latest_pastes = v?.["paste"] }
    )
  }

  wrap(text: string): string {
    return text.length < 40 ? text : text.substring(0, 40) + "..."
  }

}
