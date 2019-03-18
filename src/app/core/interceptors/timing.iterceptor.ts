import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class TimingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('timing')) {
            return this.measureRequest(req, next);
        }

        return next.handle(req);
    }

    private measureRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const time = performance.now();
        return next.handle(req.clone()).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (time) {
                        console.log(`request by url ${event.url} \nstart at ${time} and takes ${performance.now() - time}`);
                    }

                    return event;
                }
            })
        );
    }
}
