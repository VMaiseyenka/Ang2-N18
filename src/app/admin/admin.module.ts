import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule, routingComponents } from './admin-routing.module';
import { AdminAuthGuard, AdminProductResolverGuard } from './guards';

@NgModule({
    declarations: [routingComponents],
    exports: [routingComponents],
    providers: [AdminAuthGuard, AdminProductResolverGuard],
    imports: [
        CommonModule,
        FormsModule,

        AdminRoutingModule
    ]
})
export class AdminModule { }
