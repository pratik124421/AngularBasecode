import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TosterService } from '../services/toster.service';
import { TosterTypes } from '../utils/enum';
// import { TosterService } from '../services/toster.service';
import {AuthService} from "../services/auth.service"
import { TokenService } from '../services/token.service';
import { LoaderService } from '../services/loader.servicec';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private TosterService:TosterService,private AuthService : AuthService,private TokenService:TokenService,private LoaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.LoaderService.setLoading(false);
        console.log("error occured...")
        if(err.status == 409){
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
          this.TosterService.displaySnackBar("email already taken",TosterTypes.Error)
        }
        else if(err.status == 401){
          this.TosterService.displaySnackBar("Invalid Authorized",TosterTypes.Error)
          // this.AuthService.signOut()
        }else if(err.status == 403){

          return this.TokenService.RefreshJwtToken(request, next);

        }
        return throwError(err)
      })
    );
  }
}
