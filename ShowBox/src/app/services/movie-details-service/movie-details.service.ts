import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  baseURL = 'https://api.themoviedb.org/3/movie/';

  // http://api.themoviedb.org/3/movie/429617?api_key=APIKEY&append_to_response=videos%2Ccredits%2Creviews%2Cexternal_ids%2Csimilar

  constructor(private httpClient: HttpClient) { }

  getMovieDetails(id: string): Observable<MovieDetailsModel.MovieDetails> {
    const params = new HttpParams()
                  .set('api_key', environment.ApiKey)
                  .set('append_to_response', 'videos,credits,reviews,external_ids,similar');

    return this.httpClient.get<MovieDetailsModel.MovieDetails>(this.baseURL + id, {params}).pipe(
      tap(result => console.log(result))
    );
  }
}
