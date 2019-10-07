/*
This class is created to check if there is id inside the router and then if there is id the go to details page or go to
popular-movies page. But its not working as we are passing data throught router state and thus if there is no data it is throwing
undefined error inside the router. So this is not working for our case.
 */


/* import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router, ActivatedRoute } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { MovieDetailsService } from '../services/movie-details-service/movie-details.service';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolverService implements Resolve<MovieDetailsModel.MovieDetails> {


  constructor(private movieDetails: MovieDetailsService, public activatedRoute: ActivatedRoute, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    MovieDetailsModel.MovieDetails | Observable<MovieDetailsModel.MovieDetails> | Promise<MovieDetailsModel.MovieDetails> {

    Here we are trying to get data from the router, the data is inside extras of xurrentNavigation.
    We are sending the data through navigateByUrl and inside state object. so here it's still navigating
    to the url so we can find data inside router, once it's gone to the new url we need to gget the data from history.

/* Official doc says:

  state?: {
    [k: string]: any;
}
Developer-defined state that can be passed to any navigation. Access this value through the Navigation.extras object returned from
router.getCurrentNavigation() while a navigation is executing.

After a navigation completes, the router writes an object containing this value together with a navigationId to history.state.
The value is written when location.go() or location.replaceState() is called before activating this route.

Note that history.state does not pass an object equality test because the router adds the navigationId on each navigation. */

    /* const id = this.router.getCurrentNavigation().extras.state.movieId;
    console.log('resolver ' + id);
    return this.movieDetails.getMovieDetails(id).pipe(
      mergeMap(details => {
        if (details) {
          return of(details);
        } else {
          this.router.navigate(['/popular-movies']);
          return EMPTY;
        }
      })
    );
  }
} */
