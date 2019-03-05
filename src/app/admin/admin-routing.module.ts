import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    AdminComponent,
    OrdersComponent,
    ProductFormComponent,
    ProductListComponent
} from './components';
import { AdminAuthGuard, AdminProductResolverGuard } from './guards';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AdminAuthGuard],
        children: [
            { path: 'products', pathMatch: 'full', component: ProductListComponent },
            {
                path: 'products/edit/:id',
                component: ProductFormComponent,
                pathMatch: 'full',
                 resolve: { product: AdminProductResolverGuard }
            },
            {
                path: 'products/new',
                component: ProductFormComponent,
                pathMatch: 'full',
                resolve: { product: AdminProductResolverGuard }
            },
            { path: 'orders', pathMatch: 'full', component: OrdersComponent },
            { path: '', pathMatch: 'full', redirectTo: 'products' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
export let routingComponents = [AdminComponent, OrdersComponent, ProductFormComponent, ProductListComponent];
