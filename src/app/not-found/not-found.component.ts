import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotFoundComponent {

  constructor(private title: Title) {
    title.setTitle("TextBin - 404")
  }

}
