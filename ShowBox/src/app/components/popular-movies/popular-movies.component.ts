import { Component, OnInit } from '@angular/core';
import { PopularMoviesService } from 'src/app/services/popular-movies-service/popular-movies.service';
import { MovieResponse } from 'src/app/models/movie-response';

@Component({
  selector: 'app-sb-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  response: MovieResponse;
  errorMessage = '';

  constructor(private data: PopularMoviesService) { }

  ngOnInit() {

    this.data.get_movieResults().subscribe(
      response => {
        this.response = response;
        console.log(this.response.results);
      },
      err => this.errorMessage = err
    );
  }

}
