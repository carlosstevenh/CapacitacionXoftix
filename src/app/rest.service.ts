import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {User} from './user.model';

const httpOptions = {
  headers:new HttpHeaders().set('Content-Type', 'application/JSON')
}
@Injectable({
  providedIn: 'root'
})
export class RestService {
  usersUrl = 'http://127.0.0.1/service/index.php/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const url = this.usersUrl+`usuarios`;
    return this.http.get<any>(url);
  }

  getUser(ide:string): Observable<any> {
    const url = this.usersUrl+`usuario/`+ide;
    return this.http.get<any>(url);
  }

  save(user: User): Observable<any> {
    console.log(user);
    const url = this.usersUrl+`save`;
    return this.http.post<any>(url, user);
  }
  
  addUser (json: User): Observable<User> {
    
    const url = this.usersUrl+`usuarios`;
    return this.http.post<User>(url, json,httpOptions).pipe(
      tap((user: User) => this.log(`added User w/ id=${user.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('UserService: ' + message);
}
}
