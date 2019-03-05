import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule, routerComponents } from './products-routing.module';
import { ProductResolveGuard } from './guards';

@NgModule({
    declarations: [
        routerComponents
    ],
    exports: [
        routerComponents
    ],
    providers: [
        ProductResolveGuard
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,

        ProductsRoutingModule
    ]
})
export class ProductsModule { }
