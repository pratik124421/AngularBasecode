import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of, EMPTY } from 'rxjs';
import { LocationService } from './location.service';
import { UpserProductListService } from './user-product-list.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolverResolver implements Resolve<any> {

  constructor(private userProductListService : UpserProductListService,private router : Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // return of(true);

    return this.userProductListService.getUserProductList().pipe(catchError(() => {
      this.router.navigate(['/']);
      return EMPTY;
    }));
  }

}
