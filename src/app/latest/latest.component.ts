import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

  constructor(private activatedR: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedR.data.subscribe(
      (v) => { this.latest_pastes = v?.["paste"] }
    )
  }

  wrap(text: string): string {
    return text.substring(0, 40) + "..."
  }

}
