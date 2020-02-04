import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DetailsResolverService } from './guards/detailsResolverService.service';
import { SearchResultsComponent } from './components/search-results/search-results.component';


const routes: Routes = [
  {path: 'popular-movies', component: PopularMoviesComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'movie-details', component: MovieDetailsComponent,  resolve: {details: DetailsResolverService}},
  {path: 'search', component: SearchResultsComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
  {path: '', redirectTo: 'popular-movies', pathMatch: 'full'},
  { path: '**', redirectTo: 'popular-movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
