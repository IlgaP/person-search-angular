import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from "../models/person.model";
import {environment} from "../../../environments/environment";
import {catchError, Observable, Subject, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class PersonService {
  errorText = new Subject();

  constructor(private http: HttpClient) {
  }

  public getPerson(personalId: string | undefined, dateOfBirth: string | undefined): Observable<Person> {
    this.errorText.next("");
    const url = `${environment.apiBaseUrl}?personalId=${personalId}&dateOfBirth=${dateOfBirth}`;
    return this.http.get<Person>(url).pipe(catchError(err => {
      this.errorText.next(err.error.error);
      return throwError(err);
    }))
  }

  getError(): Observable<any> {
    return this.errorText;
  }
}
