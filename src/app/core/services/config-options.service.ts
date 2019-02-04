import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { ConfigOptions } from '../models';

@Injectable()
export class ConfigOptionsService {

  constructor(private localStorageService: LocalStorageService) { }

  setOptions(options: ConfigOptions) {
    if (options && options.id) {
      this.localStorageService.setItem(options.id, JSON.stringify(options));
    }
  }

  getOptions(id: string): ConfigOptions | undefined {
    let optionsStr;
    if (id) {
      optionsStr = this.localStorageService.getItem(id);
    }
    return optionsStr ? JSON.parse(optionsStr) : undefined;
  }
}
