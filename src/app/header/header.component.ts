import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoading = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

    let loaded = 0;
    let interval: any;

    this.router.events.subscribe((ev) => {
      if (ev instanceof ResolveStart) {
        console.log('start');
        this.isLoading = true;
        interval = setInterval(() => {
          console.log(loaded);
          loaded += 5;
          if (loaded > 70) {
            return
          };
          let el = document.getElementById("progress-bar");
          if (el != null) {
            el.style.width = loaded + "%";
          }
        }, 50)
      }
      if (ev instanceof ResolveEnd) {
        this.isLoading = false;
        loaded = 0;
        console.log("end");
        clearInterval(interval);
      }
    })

  }

}
