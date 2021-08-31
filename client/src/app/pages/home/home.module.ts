import { DialogComponent } from '@/app/components/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUpdateShipForm } from './components/create-update-ship-form/create-update-ship-form.component';
import { EmptyHomeComponent } from './components/empty-home/empty-home.component';
import { ShipCardComponent } from './components/ship-card/ship-card.component';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    HomePage,
    EmptyHomeComponent,
    DialogComponent,
    CreateUpdateShipForm,
    ShipCardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
