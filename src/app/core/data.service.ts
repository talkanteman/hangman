import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Movie } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

    baseUrl = 'assets/';

    constructor(private http: HttpClient) { }

    getMovie(): Observable<string> {
        return this.http.get<Movie[]>(this.baseUrl + 'movies.json')
            .pipe(
                map(movies => {
                    const rand = Math.floor(Math.random() * movies.length);
                    return movies[rand].title;
                }),
                catchError(this.handleError)
            );
    }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
