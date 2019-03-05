import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components';

const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full', },
    { path: 'cart', component: CartComponent, pathMatch: 'full', },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CartRoutingModule { }
export let routerComponents = [CartComponent];
