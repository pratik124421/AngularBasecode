import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { Observable } from "rxjs/internal/Observable";
import { ApiRoute, StorageKeyNames } from "../utils/enum";
import { AuthService } from "./auth.service";
import { EncryptDecryptService } from "./encrypt-decrypt.service";

import {switchMap,catchError} from "rxjs/operators"
import { throwError } from "rxjs";
import { LoaderService } from "./loader.servicec";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class TokenService{
    constructor(private http:HttpClient,private EncryptDecryptService:EncryptDecryptService,private AuthService:AuthService,private LoaderService:LoaderService){}

    RefreshJwtToken(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{

            const token = this.EncryptDecryptService.getDecryptedLocalstorage(StorageKeyNames.token)
            return this.GenerateNewToken().pipe(
                switchMap((result: any) => {
                  // this.isRefreshing = false;

                  console.log("token :::>> ",result.access_token)
                  this.EncryptDecryptService.setEncryptedLocalstorage(StorageKeyNames.token,result.access_token)

                  // this.tokenService.saveToken(token.accessToken);
                  // this.refreshTokenSubject.next(token.accessToken);
                  const token = this.EncryptDecryptService.getDecryptedLocalstorage(StorageKeyNames.token)
                  request = request.clone({
                    setHeaders:{
                      'Content-Type':'application/json',
                      'Authorization':token.replace(/"/g, ''),
                    },
                  })

                  return next.handle(request);
                }),
                catchError((err) => {
                  this.LoaderService.setLoading(false);

                  // this.isRefreshing = false;

                  // this.AuthService.signOut()
                  return throwError(err);
                })
            )
    }

    GenerateNewToken(){
        const url = ApiRoute.refreshJwtToken
        return this.http.get(url)
    }

}
