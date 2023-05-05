import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, finalize} from 'rxjs'
import {OverlayService} from '../../services/overlay.service'

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
