import Ship from "../models/Ship";
import { v4 as uuid } from "uuid";

/**
 Singleton class mocking a DB instance
 */
class ShipDB {
  private static instance: ShipDB;

  constructor() {
    if (ShipDB.instance) {
      return ShipDB.instance;
    }

    this.ships = {};
    ShipDB.instance = this;
  }

  ships: { [key: string]: Ship };

  public getShips() {
    const ships = Object.values(this.ships);
    return ships;
  }

  public getShipById(id: string) {
    return this.ships[id];
  }

  public addShip(shipPayload: Ship) {
    const id = uuid();
    const ship = { ...shipPayload, id };
    this.ships[id] = ship;
    return ship;
  }

  public updateShip(id: string, shipData: Ship) {
    const updatedShip = Object.assign(this.ships[id], shipData);
    return updatedShip;
  }
  public deleteShip(id: string) {
    delete this.ships[id];
    return id;
  }
}

export const shipsDB = new ShipDB();
