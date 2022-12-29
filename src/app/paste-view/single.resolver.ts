import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import Paste from 'src/models/Paste';
import { PasteService } from '../services/paste.service';

@Injectable({
  providedIn: 'root'
})
export class SingleResolver implements Resolve<Paste> {

  constructor(private ps: PasteService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paste> {
    const uuid = route.paramMap.get("id") ?? "";
    if (uuid == "") {
      this.router.navigate(["404"]);
    };
    return this.ps.get(uuid).pipe(
      catchError(() => {
        this.router.navigate(["404"]);
        return EMPTY
      }),
    )
  }
}
