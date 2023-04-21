import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js"
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";


@Injectable({providedIn:"root"})
export class EncryptDecryptService {
    private CryptoSecretKey = "randomkey"
    constructor(private CookieService : CookieService){}

    encryptData(value:any){
        return CryptoJS.AES.encrypt(JSON.stringify(value),this.CryptoSecretKey).toString()
    }

    descryptData(value:any){
        const decryptedData = CryptoJS.AES.decrypt(
            value.toString(),
            this.CryptoSecretKey
        )

        if(decryptedData){
            const data = decryptedData.toString(CryptoJS.enc.Utf8);
            return data
        }
    }

    setEncryptedLocalstorage(key:string,value:any){
        if(key && value){
            const encryptedData = this.encryptData(value)
            localStorage.setItem(key,encryptedData)
        }
    }

    getDecryptedLocalstorage(key:string){
        if(key){
            const LocalStorageEncryptedData = localStorage.getItem(key)
            if(LocalStorageEncryptedData){
                return this.descryptData(LocalStorageEncryptedData)
            }else{
                return null
            }
        }
    }

    removeEncryptedLocalstorage(key:string){
        if (key) {
            localStorage.removeItem(key);
        }
    }

    setEncryptedCookie(key:string,value:any){
        if(key && value){
            const encryptedData = this.encryptData(value)
            this.CookieService.set(key,encryptedData,undefined,"/",environment.domain)
        }
    }

    getDecryptdCookie(key:string){
        if (key) {
            const cookieStorageEncryptedData = this.CookieService.get(key);
            if (cookieStorageEncryptedData) {
                return this.descryptData(cookieStorageEncryptedData);
            }
        }
    }

    removeEncryptedCookie(key:string){
        if (key) {
            this.CookieService.delete(key);
        }
    }

}
