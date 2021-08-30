import { validationResult } from "express-validator";
import { Request, Response } from "express";
import { shipsDB } from "../db";
import { createShipUseCase } from "../use-cases/create-ship";
import { shipPresenter } from "../presenters/ship.presenter";
import { deleteShipUseCase } from "../use-cases/delete-ship";
import { readShipsUseCase } from "../use-cases/read-ships";
import { readShipByIdUseCase } from "../use-cases/read-ship-by-id";
import { updateShipUseCase } from "../use-cases/update-ship";

class ShipController {
  // In controller we usually handle business logic, but here we will do some basic validations
  createShip(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { body } = req;
    try {
      const ship = createShipUseCase.execute(body);
      shipPresenter.presentShip(res, ship);
    } catch (e) {
      res
        .status(400)
        .send(JSON.stringify({ error: "something wrong happened" }));
    }
  }

  getAllShip(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const ships = readShipsUseCase.execute();
    shipPresenter.presentShips(res, ships);
  }

  getShipByID(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      params: { id },
    } = req;
    const ship = readShipByIdUseCase.execute(id);
    if (!!ship) {
      shipPresenter.presentShip(res, ship);
    } else {
      res.status(404).send(JSON.stringify({ error: "no such ship" }));
    }
  }

  updateShip(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      params: { id },
      body,
    } = req;
    const shipTpUpdate = shipsDB.getShipById(id);
    try {
      if (!!shipTpUpdate) {
        const ship = updateShipUseCase.execute(id, body);
        shipPresenter.presentShip(res, ship);
      } else {
        res.status(404).send(JSON.stringify({ error: "no such ship" }));
      }
    } catch (e) {
      res
        .status(400)
        .send(JSON.stringify({ error: "something wrong happened" }));
    }
  }

  deleteShip(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      params: { id },
    } = req;
    const shipToDelete = shipsDB.getShipById(id);
    if (!!shipToDelete) {
      try {
        deleteShipUseCase.execute(id);
        shipPresenter.presentShipId(res, id);
      } catch (e) {
        res
          .status(400)
          .send(JSON.stringify({ error: "something wrong happened" }));
      }
    } else {
      res.status(404).send(JSON.stringify({ error: "no such ship" }));
    }
  }
}

export const shipController = new ShipController();
