import { Component, OnInit } from '@angular/core';
import { PopularMoviesService } from 'src/app/services/popular-movies-service/popular-movies.service';
import { MovieResponse } from 'src/app/models/movie-response';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sb-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  response: MovieResponse;
  errorMessage = '';
  loader = true;

  constructor(private data: PopularMoviesService,  public router: Router) { }

  ngOnInit() {
    this.data.get_movieResults().subscribe(
      response => {
        this.response = response;
        this.loader = false;
      },
      err => this.errorMessage = err
    );
  }

  passId(id: string) {
    this.router.navigateByUrl('/movie-details', {state: {movieId: id}});
  }

}
