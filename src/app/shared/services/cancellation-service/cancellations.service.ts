import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CancellationsService {

  constructor(private http: HttpClient) { }

  cancelFound(data: any): Observable<any> {
    return this.http.post<any>(environment.api + 'cancel', data);
  }

}
