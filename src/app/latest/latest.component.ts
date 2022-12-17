import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import Paste from 'src/models/Paste';
import { PasteService } from '../services/paste.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
})
export class LatestComponent {

  latest_pastes$: Observable<Paste[]> | undefined;

  constructor(private ps: PasteService) { }

  ngOnInit(): void {
    this.latest_pastes$ = this.ps.latest()
  }

  wrap(text: string): string {
    return text.substring(0, 40) + "..."
  }

}
