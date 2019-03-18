import { NgModule, Optional, SkipSelf, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    ConstantsService,
    ConfigOptionsService,
    GeneratorService,
    LocalStorageService,
    ProductsHttpService,
    AuthService,
    AppSettingsService
} from './services';
import { GENERATOR, GeneratorFactory } from './services/generator.factory';
import { HeaderComponent, NotFoundComponent, LoginComponent } from './components';
import { ProductsAPIProvider } from './config/products.config';
import { TimingInterceptor } from './interceptors';

const constantsService = new ConstantsService();

export const CONFIG = new InjectionToken<ConfigOptionsService>('config');

@NgModule({
    declarations: [HeaderComponent, NotFoundComponent, LoginComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule
    ],
    exports: [HeaderComponent],
    providers: [
        ProductsAPIProvider,
        LocalStorageService,
        GeneratorService,
        ProductsHttpService,
        AppSettingsService,
        AuthService,
        { provide: ConstantsService, useValue: constantsService },
        { provide: CONFIG, useClass: ConfigOptionsService },
        { provide: GENERATOR, useFactory: GeneratorFactory(8), deps: [GeneratorService] },
        { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
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
