import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {CreateUserRequest} from '@app/shared/interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(data: CreateUserRequest): Observable<any> {
    return this.http.post<any>(environment.api + 'create/user', data);
  }

}
