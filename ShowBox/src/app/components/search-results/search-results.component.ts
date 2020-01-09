import { Component, OnInit } from '@angular/core';
import { SearchResultsServiceService } from 'src/app/services/search-results-service/search-results-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sb-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  query: string;
  response: MovieSearchModel.SearchDetails;
  errorMessage = '';
  loading = true;
  constructor(private data: SearchResultsServiceService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getSearchResults();
    this.data.get_searchResults(this.query).subscribe(
      response => {
        this.response = response;
        console.log(this.response);
        this.loading = false;
      },
      err => this.errorMessage = err
    );
  }

  getSearchResults() {
    /*  this method is used to impliment resolve interface so that we can redirect to popular-movies
     page if there is no Id to show the details in details page. if we have the id we directly get the data from there
     it is a service that makes the rest call. */
    this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    ).subscribe(result => {
      console.log('searchComponent: ' + result.searchQuery);
      this.query = result.searchQuery;
    });
  }

  passId(id: string) {
    this.router.navigateByUrl('/movie-details', { state: { movieId: id } });
  }
}
