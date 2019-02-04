import { InjectionToken } from '@angular/core';

import { GeneratorService } from './generator.service';

export const GENERATOR = new InjectionToken<any[]>('GENERATOR');

export function GeneratorFactory(n: number) {
  return function(service: GeneratorService): string {
    return service.generate(n);
  };
}