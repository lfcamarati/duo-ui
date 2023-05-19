export interface Message {
  detail: string
  severity: MessageSeverity
}

export type MessageSeverity = 'success' | 'error' | 'info' | 'warn'
