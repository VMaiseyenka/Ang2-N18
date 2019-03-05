import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent, LoginComponent } from './core/components';

const routes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }