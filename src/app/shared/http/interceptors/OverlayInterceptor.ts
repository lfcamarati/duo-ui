import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {catchError, finalize, map, Observable} from 'rxjs'
import {OverlayService} from '../overlay.service'

@Injectable()
export class OverlayInterceptor implements HttpInterceptor {
  constructor(private overlayService: OverlayService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.overlayService.setLoading(true, req.url)

    return next.handle(req).pipe(
      finalize(() => {
        this.overlayService.setLoading(false, req.url)
      })
    )
  }
}