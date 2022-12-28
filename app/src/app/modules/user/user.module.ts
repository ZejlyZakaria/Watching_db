import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AnimeHomeComponent } from './anime/components/anime-home/anime-home.component';
import { AnimeDashboardComponent } from './anime/components/anime-dashboard/anime-dashboard.component';
import { AnimeSidebarComponent } from './anime/components/anime-sidebar/anime-sidebar.component';
import { AnimeDetailsPageComponent } from './anime/components/anime-details-page/anime-details-page.component';

@NgModule({
  declarations: [
    AnimeHomeComponent,
    AnimeDashboardComponent,
    AnimeSidebarComponent,
    AnimeDetailsPageComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
