import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { HomeService, Ship } from './home.service';

@Component({
  selector: 'home-page',
  styleUrls: ['./home.page.scss'],
  templateUrl: './home.page.html',
})
export class HomePage {
  @ViewChild(DialogComponent)
  createUpdateShipDialog!: DialogComponent;

  public static CREATE_SHIP_DIALOG_TITLE = 'Create New Ship';
  public static UPDATE_SHIP_DIALOG_TITLE = 'Update Ship';

  public ships: Ship[] = [];
  public isLoadingShips = false;
  public formMode: 'CREATE' | 'EDIT' = 'CREATE';
  public shipToUpdate?: Ship;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getAllShips();
  }

  getFormTitle() {
    return this.formMode === 'EDIT'
      ? HomePage.UPDATE_SHIP_DIALOG_TITLE
      : HomePage.CREATE_SHIP_DIALOG_TITLE;
  }

  submitShipForm(payload: any) {
    if (this.formMode === 'EDIT') {
      this.updateShip({ ...payload, id: this.shipToUpdate?.id });
    } else {
      this.addShip(payload);
    }
  }

  async getAllShips() {
    try {
      this.ships = await this.homeService.getAllShips();
    } catch (e) {
      console.error(e);
    }
    this.isLoadingShips = false;
  }

  async addShip(ship: Ship) {
    try {
      const shipToAdd = await this.homeService.createShip(ship);
      this.ships.unshift(shipToAdd);
      this.createUpdateShipDialog.closeDialog();
    } catch (e) {
      console.error(e);
    }
  }

  async deleteShip(ship: Ship) {
    try {
      const { id } = ship;
      const shipToDelete = await this.homeService.deleteShip(id);
      const shipToDeleteIndex = this.ships.findIndex((ship) => {
        return ship.id === shipToDelete.id;
      });
      this.ships.splice(shipToDeleteIndex, 1);
    } catch (e) {
      console.error(e);
    }
  }
  async updateShip(ship: Ship) {
    try {
      const { id } = ship;
      const shipToUpdate = await this.homeService.updateShip(id, ship);
      const shipToUpdateIndex = this.ships.findIndex((ship) => {
        return ship.id === shipToUpdate.id;
      });
      this.ships[shipToUpdateIndex] = shipToUpdate;
      this.createUpdateShipDialog.closeDialog();
    } catch (e) {
      console.error(e);
    }
  }

  showCreateUpdateShipDialog = (payload?: any) => {
    if (payload) {
      this.shipToUpdate = payload;
      this.formMode = 'EDIT';
    } else {
      this.shipToUpdate = undefined;
      this.formMode = 'CREATE';
    }
    this.createUpdateShipDialog.showDialog();
  };
}
