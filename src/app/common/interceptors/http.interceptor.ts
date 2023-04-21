import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable,throwError } from 'rxjs';
import {catchError} from "rxjs/operators"
import { environment } from 'src/environments/environment';
import { ApiRoute, StorageKeyNames } from '../utils/enum';
import { AuthService } from '../services/auth.service';
import { EncryptDecryptService } from '../services/encrypt-decrypt.service';
import { LoaderService } from '../services/loader.servicec';
import { TokenService } from '../services/token.service';

@Injectable()
export class httpInterceptor implements HttpInterceptor {

  constructor(private EncryptDecryptService:EncryptDecryptService,private LoaderService:LoaderService,private TokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("request in interceptor:: ",request)

    this.LoaderService.setLoading(true);

    if(request.url.includes(ApiRoute.login_url)){
      request = request.clone({
        setHeaders:{
          'Content-Type':'application/json',
        },
        withCredentials:true,
        url:environment.serverUrl+request.url
      })
    }else if(request.url.includes(ApiRoute.register_url)){
      request = request.clone({
        setHeaders:{
          'Content-Type':'application/json',
        },
        url:environment.serverUrl+request.url
      })
    }else if(request.url.includes(ApiRoute.refreshJwtToken)){
      const token = this.EncryptDecryptService.getDecryptedLocalstorage(StorageKeyNames.refreshToken)
      request = request.clone({
        setHeaders:{
          'Content-Type':'application/json',
          'Authorization':token.replace(/"/g, '') ,
        },
        url:environment.serverUrl+request.url
      })
    }else{
      console.log("token:: ",this.EncryptDecryptService.getDecryptedLocalstorage(StorageKeyNames.token))
      const token = this.EncryptDecryptService.getDecryptedLocalstorage(StorageKeyNames.token)
      request = request.clone({
        setHeaders:{
          'Content-Type':'application/json',
          'Authorization':token.replace(/"/g, '') ,
        },
        withCredentials:true,
        url:environment.serverUrl+request.url
      })
    }

    console.log(request)
    return next.handle(request).pipe(
      finalize(()=>{
        this.LoaderService.setLoading(false);
      })
    );

  }
}
