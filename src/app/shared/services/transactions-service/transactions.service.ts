import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {Transaction} from '@app/shared/interfaces/transactions.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    console.log('Get Transactions');
    return this.http.get<any>(environment.api + 'transactions/');
  }


}
