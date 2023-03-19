import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpfCnpj' })
export class CpfCnpjPipe implements PipeTransform {
  transform(value?: string): string {
    if (!value) {
      return "";
    }

    if (value.length === 11) {
      return value
        .padStart(11, '0')
        .replace(/\D/g, '')
        .replace(/^(\d{3})(\d{3})?(\d{3})?(\d{2})?/, "$1.$2.$3-$4");
    }
    
    return value
      .padStart(14, '0')
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5");
  }
}