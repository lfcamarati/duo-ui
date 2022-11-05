import { Subject } from "rxjs";

export interface ClientNameObserver {
  getClientName(): Subject<string>
}