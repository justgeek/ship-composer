import { shipsDB } from "../db";
import Ship from "../models/Ship";

class UpdateShipUseCase {
  execute(id: string, payload: Ship) {
    const ship = shipsDB.updateShip(id, payload);
    return ship;
  }
}

export const updateShipUseCase = new UpdateShipUseCase();
