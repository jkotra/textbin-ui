import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Paste from 'src/models/Paste';

@Injectable({
  providedIn: 'root'
})
export class PasteService {

  constructor(private http: HttpClient) { }

  get(uuid: string): Observable<Paste> {
    return this.http.get<Paste>(`/api?uuid=${uuid}`)
  }

  post(paste: Paste): Observable<Paste> {
    return this.http.post<Paste>("/api", paste)
  }

  latest(): Observable<Array<Paste>> {
    return this.http.get<Array<Paste>>("/api/latest")
  }

}
