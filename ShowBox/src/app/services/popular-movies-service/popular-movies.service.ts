import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MovieResponse } from 'src/app/models/movie-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {

  baseURL = 'https://api.themoviedb.org/3/';
  discoverMovieURL = 'discover/movie';

  // https://api.themoviedb.org/3/discover/movie?api_key=APIKEY&sort_by=popularity.desc&page=1

  constructor(private httpClient: HttpClient) { }

  get_movieResults(): Observable<MovieResponse> {
    const params = new HttpParams()
                .set('api_key', environment.ApiKey)
                .set('sort_by', 'popularity.desc')
                .set('page', '1');
    return this.httpClient.get<MovieResponse>(this.baseURL + this.discoverMovieURL, {params}).pipe(
      tap( result => console.log(result))
    );
  }
}
