import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AppPages } from './pages.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, HomePageModule],
  declarations: [AppPages],
})
export class PagesModule {}
