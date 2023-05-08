import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {

    constructor(private tokenService:TokenService){
    }

    intercept(request : HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let intentoRequest = request;
        const token = this.tokenService.getToken();
        if (token != null) {
            intentoRequest = request.clone({
                headers: request.headers.set('Authorization', 'Bearer' + token)
            });

        }
        return next.handle(intentoRequest);
    }
}

export const intereceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];