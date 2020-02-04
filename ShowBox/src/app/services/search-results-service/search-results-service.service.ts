import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsServiceService {

  baseURL = 'https://api.themoviedb.org/3/';
  searchMovieURL = 'search/movie';
  
  // https://api.themoviedb.org/3/search/movie?api_key=APIKEY&query=spiderman&page=1

  constructor(private httpClient: HttpClient) { }

  get_searchResults(query: string): Observable<MovieSearchModel.SearchDetails> {
    const params = new HttpParams()
              .set('api_key', environment.ApiKey)
              .set('query', query)
              .set('page', '1');

    return this.httpClient.get<MovieSearchModel.SearchDetails>(this.baseURL + this.searchMovieURL, {params}).pipe(
      tap( result => console.log(result))
    );
  }

}
