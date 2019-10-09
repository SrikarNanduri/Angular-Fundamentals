import { Component, OnInit, Input } from '@angular/core';
import { MovieDetailsService } from 'src/app/services/movie-details-service/movie-details.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sb-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: string;
  movieDetails: MovieDetailsModel.MovieDetails;
  errorMessage = '';
  loading = true;

  genres: MovieDetailsModel.Genre[];
  similar: MovieDetailsModel.SimilarResults[];

  constructor(private movieDetailsService: MovieDetailsService, public activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    // this here shows how to get data from the router state.
/*     this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    ).subscribe(result => {
      console.log('movieDetailsComponent ' + result.movieId);
      this.movieId = result.movieId;
    }); */

    this.getMovieDetails();
  }

  getMovieDetails() {
/*  this method is used to impliment resolve interface so that we can redirect to popular-movies
 page if there is no Id to show the details in details page. if we have the id we directly get the data from there
 it is a service that makes the rest call. */
    this.activatedRoute.data.subscribe((data: {details: MovieDetailsModel.MovieDetails}) => {
      this.movieDetails = data.details;
      this.genres = this.movieDetails.genres;
      this.similar = this.movieDetails.similar.results.slice(0, 5);
      this.loading = false;
    });
  }

  passId(id) {
    this.movieId = id;
    this.movieDetailsService.getMovieDetails(this.movieId).subscribe(
      result => {
        this.movieDetails = result;
        this.genres = this.movieDetails.genres;
        this.similar = this.movieDetails.similar.results.slice(0, 5);
        this.loading = false;
      },
      err => this.errorMessage = err
    );
  }
}
