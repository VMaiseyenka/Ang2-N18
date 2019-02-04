import { NgModule, Optional, SkipSelf, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ConstantsService,
  ConfigOptionsService,
  GeneratorService,
  LocalStorageService
} from './services';
import { GENERATOR, GeneratorFactory } from './services/generator.factory';

const constantsService = new ConstantsService();

export const CONFIG = new InjectionToken<ConfigOptionsService>('config');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    { provide: ConstantsService, useValue: constantsService },
    { provide: CONFIG, useClass: ConfigOptionsService },
    { provide: GENERATOR, useFactory: GeneratorFactory(8), deps: [GeneratorService] },
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        `CoreModule is already loaded. Import it in the AppModule only.`
      );
    }
  }
}
