import {Injectable} from '@angular/core'
import {MessageService} from 'primeng/api'

@Injectable({providedIn: 'root'})
export class MessagesService {
  showSuccess(detail: string): void {
    this.showMessage(detail, 'success')
  }

  showError(detail: string): void {
    this.showMessage(detail, 'error')
  }

  showInfo(detail: string): void {
    this.showMessage(detail, 'info')
  }

  showWarn(detail: string): void {
    this.showMessage(detail, 'warn')
  }

  private showMessage(detail: string, severity: string): void {
    this.messageService.add({
      severity: severity,
      detail: detail,
    })
  }

  constructor(private messageService: MessageService) {}
}
