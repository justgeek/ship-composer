import { shipsDB } from "../db";

class ReadShipsUseCase {
  execute() {
    const ships = [...shipsDB.getShips()];
    return ships;
  }
}

export const readShipsUseCase = new ReadShipsUseCase();
