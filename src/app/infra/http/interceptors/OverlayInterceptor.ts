import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { OverlayService } from "../overlay.service";

@Injectable()
export class OverlayInterceptor implements HttpInterceptor {

  constructor(
    private overlayService: OverlayService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.overlayService.setLoading(true, req.url);
    
    return next.handle(req)
      .pipe(catchError((err) => {
        this.overlayService.setLoading(false, req.url);
        return err;
      }))
      .pipe(map((event: any) => {
        if (event instanceof HttpResponse) {
          this.overlayService.setLoading(false, req.url);
        }
        return event;
      }));
  }
}