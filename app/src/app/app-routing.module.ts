import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPwdComponent } from './components/forgot-pwd/forgot-pwd.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { WatchingCategoriesComponent } from './components/watching-categories/watching-categories.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-pwd',
    component: ForgotPwdComponent,
  },
  {
    path: 'categories',
    component: WatchingCategoriesComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((user) => user.UserModule),
  },
  /*{
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((admin) => admin.AdminModule),
  },*/
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
