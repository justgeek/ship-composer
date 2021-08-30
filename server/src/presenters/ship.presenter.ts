import { Response } from "express";
import Ship from "../models/Ship";

class ShipPresenter {
  presentShip(res: Response, ship: Ship) {
    res.json({
      ...ship,
    });
  }

  presentShips(res: Response, ships: Ship[]) {
    res.json(ships);
  }

  presentShipId(res: Response, id: string) {
    res.json({
      id,
    });
  }
}

export const shipPresenter = new ShipPresenter();
