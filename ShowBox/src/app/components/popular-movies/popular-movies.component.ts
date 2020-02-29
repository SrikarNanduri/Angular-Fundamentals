import { Component, OnInit } from '@angular/core';
import { PopularMoviesService } from 'src/app/services/popular-movies-service/popular-movies.service';
import { MovieResponse } from 'src/app/models/movie-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sb-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  response: MovieResponse;
  errorMessage = '';
  loader = true;
  posterPath: string = 'https://image.tmdb.org/t/p/w500';
  backdropPath: string = 'https://image.tmdb.org/t/p/original';

  constructor(private data: PopularMoviesService, public router: Router) { }

  ngOnInit() {
    this.data.get_movieResults().subscribe(
      response => {
        this.response = response;
        this.loader = false;
      },
      err => this.errorMessage = err.error.status_message
    );
  }

  getBackdrops() {
    return this.response.results.slice(0,5).map((movie, index) => (
      {
        "indicator": index,
        "title": movie.title,
        "backdrop": this.backdropPath + movie.backdrop_path
      }
    )
    );

  }

  getPosters() {
    return this.response.results.slice(0,5).map((movie, index) => (
      {
        "indicator": index,
        "title": movie.title,
        "backdrop": this.backdropPath + movie.poster_path
      }
    )
    );
  }

  passId(id: string) {
    this.router.navigateByUrl('/movie-details', { state: { movieId: id } });
  }

}
