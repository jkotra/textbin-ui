import { Injectable } from '@angular/core';
import { PasteService } from '../services/paste.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, map, Observable, of } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult as AQR } from '@apollo/client/core';
import Paste from 'src/models/Paste';

@Injectable({
  providedIn: 'root'
})

export class LatestResolver implements Resolve<AQR<Paste[]>> {

  constructor(private ps: PasteService, private appolo: Apollo) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AQR<Paste[]>> {

    const LATEST_PASTES = gql`
    query {
      getLatestPastes {
        id
        uuid
        title
        text
      }
    }    
    `;

    return this.appolo.watchQuery<Paste[]>({ query: LATEST_PASTES }).valueChanges.pipe(
      map((data: any) => data.data.getLatestPastes),
    );

    /* // REST API
    return this.ps.latest().pipe(
      catchError(() => {
        return EMPTY
      }),
    );
    */

  }
}
