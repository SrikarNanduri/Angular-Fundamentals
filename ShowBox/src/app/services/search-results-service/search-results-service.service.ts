import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsServiceService {

  baseURL = 'https://api.themoviedb.org/3/';
  searchMovieURL = 'search/movie';
  ApiKey = 'Insert Your API Key';

  constructor(private httpClient: HttpClient) { }

  // https://api.themoviedb.org/3/search/movie?api_key=APIKEY&query=spiderman&page=1

  get_searchResults(query: string): Observable<MovieSearchModel.SearchDetails> {
    const params = new HttpParams()
              .set('api_key', this.ApiKey) // Check before you push
              .set('query', query)
              .set('page', '1');

    return this.httpClient.get<MovieSearchModel.SearchDetails>(this.baseURL + this.searchMovieURL, {params}).pipe(
      tap( result => console.log(result))
    );
  }

}
