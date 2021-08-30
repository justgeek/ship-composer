import { shipsDB } from "../db";
import Ship from "../models/Ship";

class CreateShipUseCase {
  execute(shipToCreate: Ship) {
    const ship = shipsDB.addShip(shipToCreate);
    return ship;
  }
}

export const createShipUseCase = new CreateShipUseCase();
