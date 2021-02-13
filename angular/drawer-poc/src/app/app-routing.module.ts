import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'services', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule) },
  { path: 'contact-us', loadChildren: () => import('./features/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
