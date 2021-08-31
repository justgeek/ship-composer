import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppPages } from './pages.component';
import { NotFoundPage } from './miscellaneous/not-found/not-found.page';
import { HomePage } from './home/home.page';
import { HelpPage } from './help/help.page';

const routes: Routes = [
  {
    path: '',
    component: AppPages,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'help',
        component: HelpPage,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
