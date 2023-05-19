import {Injectable} from '@angular/core'
import {MessageService} from 'primeng/api'

@Injectable()
export class MessagesService {
  addSuccess(detail: string): void {
    this.addMessage(detail, 'success')
  }

  addError(detail: string): void {
    this.addMessage(detail, 'error')
  }

  addInfo(detail: string): void {
    this.addMessage(detail, 'info')
  }

  addWarn(detail: string): void {
    this.addMessage(detail, 'warn')
  }

  private addMessage(detail: string, severity: string): void {
    this.messageService.add({
      severity: severity,
      detail: detail,
    })
  }

  constructor(private messageService: MessageService) {}
}
