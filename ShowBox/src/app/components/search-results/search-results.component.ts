import { Component, OnInit } from '@angular/core';
import { SearchResultsServiceService } from 'src/app/services/search-results-service/search-results-service.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { map, tap, filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common';

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
  navigationSubscription;
  constructor(private data: SearchResultsServiceService, public router: Router, public activatedRoute: ActivatedRoute, private _location: Location) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseSearch();
      }
    });
   }


  ngOnInit() {
  }

  initialiseSearch() {
    this.getSearchQuery();
    this.data.get_searchResults(this.query).subscribe(
      response => {
        this.response = response;
        console.log(this.response);
        this.loading = false;
      },
      err => this.errorMessage = err
    );
  }

  getSearchQuery() {
    this.activatedRoute.queryParams
      .subscribe(result => {
        console.log('searchComponent: ' + result["searchQuery"]);
        this.query = result["searchQuery"];
      });
  }

  passId(id: string) {
    this.router.navigateByUrl('/movie-details', { state: { movieId: id } });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
