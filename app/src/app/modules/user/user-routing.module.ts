import { SlicePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDashboardComponent } from './anime/components/anime-dashboard/anime-dashboard.component';
import { AnimeDetailsPageComponent } from './anime/components/anime-details-page/anime-details-page.component';
import { AnimeHomeComponent } from './anime/components/anime-home/anime-home.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeDashboardComponent,
    children: [
      {
        path: 'anime/home',
        component: AnimeHomeComponent,
      },
      {
        path: 'anime/details-page',
        component: AnimeDetailsPageComponent,
      },
      {
        path: '',
        redirectTo: '/user/anime/home', pathMatch:'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
