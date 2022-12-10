import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Paste from 'src/models/Paste';
import { PasteService } from '../services/paste.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
})
export class LatestComponent {

  latest_pastes: Paste[] = []

  constructor(private ps: PasteService) { }

  ngOnInit(): void {
    this.ps.latest().subscribe(v => { this.latest_pastes = v })
  }

  wrap(text: string): string {
    return text.substring(0, 40) + "..."
  }

}
