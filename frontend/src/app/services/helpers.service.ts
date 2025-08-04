import { Injectable } from '@angular/core';
import { HelperUser } from '../models/helper.model'
import { Observable,of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseHelper } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  constructor(private httpClient : HttpClient) { }
  private url = 'http://localhost:5000/api/helpers';

  getHelpers(sortBy: string='',searchTerm: string=''): Observable<HelperUser[]>{
    const params = new HttpParams().set('sort',sortBy).set('search',searchTerm);
    return this.httpClient.get<HelperUser[]>(`${this.url}/getAll`,{params});
  }

  addHelper(helper: FormData): Observable<ResponseHelper>{
    return this.httpClient.post<ResponseHelper>(`${this.url}/add`,helper);
  }

  getCount(): Observable<{count:number}>{
    return this.httpClient.get<{count: number}>(`${this.url}/getCount`);
  }
}
