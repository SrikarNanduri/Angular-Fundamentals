import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const routes: Routes = [
  {path: 'popular-movies', component: PopularMoviesComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'movie-details', component: MovieDetailsComponent},
  {path: '', redirectTo: 'popular-movies', pathMatch: 'full'},
  { path: '**', redirectTo: 'popular-movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
