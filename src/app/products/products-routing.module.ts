import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent, ProductComponent, ProductCommentsComponent } from './components';
import { ProductResolveGuard } from './guards';

const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full', },
    { path: 'products', component: ProductListComponent, pathMatch: 'full', },
    {
        path: 'products/:productId',
        component: ProductComponent,
        resolve: { product: ProductResolveGuard },
        children: [
            { path: 'comments', component: ProductCommentsComponent, outlet: 'product-comments' },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
export let routerComponents = [ProductListComponent, ProductComponent, ProductCommentsComponent];
