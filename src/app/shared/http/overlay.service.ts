import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private loadingMap: Map<string, boolean> = new Map<string, boolean>()
  private loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  )

  setLoading(loading: boolean, url: string): void {
    if (loading === true) {
      this.loadingMap.set(url, loading)
      this.loadingSub.next(true)
    } else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url)
    }

    if (this.loadingMap.size === 0) {
      this.loadingSub.next(false)
    }
  }

  watch(): Observable<boolean> {
    return this.loadingSub.asObservable()
  }
}
