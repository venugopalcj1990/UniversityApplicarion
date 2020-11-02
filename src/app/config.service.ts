import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Iuser } from "./user";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  url = "http://localhost:4000/users";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.url).pipe(catchError(this.handleError));
  }

  postUser(user: Iuser) {
    return this.http
      .post(this.url, user, {
        headers: new HttpHeaders({
          "content-Type": "application/json"
        })
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
