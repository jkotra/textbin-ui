import { Injectable } from '@angular/core';
import { PasteService } from '../services/paste.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of } from 'rxjs';
import Paste from 'src/models/Paste';

@Injectable({
  providedIn: 'root'
})
export class LatestResolver implements Resolve<Paste[]> {

  constructor(private ps: PasteService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paste[]> {
    return this.ps.latest().pipe(
      catchError(() => {
        return EMPTY
      }),
    );
  }
}
