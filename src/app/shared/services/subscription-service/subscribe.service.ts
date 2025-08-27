import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {SubscribeFundRequest, SubscriptionFound} from '@app/shared/interfaces/found.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  subscribeFound(data: SubscribeFundRequest): Observable<SubscriptionFound> {
    return this.http.post<any>(environment.api + 'subscribe', data);
  }

}
