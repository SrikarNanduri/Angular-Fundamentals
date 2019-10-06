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
    this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    ).subscribe(result => {
      console.log(result.movieId);
      this.movieId = result.movieId;
    });

    this.movieDetailsService.getMovieDetails(this.movieId).subscribe(
      result => {
        this.movieDetails = result;
        this.loading = false;
        this.genres = this.movieDetails.genres;
        this.similar = this.movieDetails.similar.results.slice(0, 5);
      },
      err => this.errorMessage = err
    );
  }
}
