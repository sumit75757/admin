import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './service/auth/auth-guard.guard';
import { RouteGuardGuard } from './service/route/route-guard.guard';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [RouteGuardGuard],
    children: [
      {
        path: '',
        redirectTo: 'sample-page',
        pathMatch: 'full'
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path: 'seller',
        loadChildren: () => import('./demo/pages/seller/seller.module').then(module => module.SellerModule)
      },
      {
        path: 'catogory',
        loadChildren: () => import('./demo/pages/catagory/catagory.module').then(module => module.CatagoryModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./demo/pages/user/user.module').then(module => module.UserModule)
      },
      {
        path: 'Offers',
        loadChildren: () => import('./demo/pages/offers/offers/offers.module').then(module => module.OffersModule)
      }
    ]
  },
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [AuthGuardGuard],


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
