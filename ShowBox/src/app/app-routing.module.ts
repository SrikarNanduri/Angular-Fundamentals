import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';


const routes: Routes = [
  {path: 'popular-movies', component: PopularMoviesComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: '', redirectTo: '/popular-movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
