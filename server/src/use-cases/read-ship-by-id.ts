import { shipsDB } from "../db";

class ReadShipByIdUseCase {
  execute(id: string) {
    const ship = shipsDB.getShipById(id);
    return ship;
  }
}

export const readShipByIdUseCase = new ReadShipByIdUseCase();
