import { shipsDB } from "../db";

class DeleteShipUseCase {
  execute(id: string) {
    shipsDB.deleteShip(id);
    return id;
  }
}

export const deleteShipUseCase = new DeleteShipUseCase();
