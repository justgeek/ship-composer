import { Request, Response } from "express";
import { shipController } from "../controllers/ship.controller";

export default class ShipHandler {
  //Do extra stuff if necessary Here
  //....
  // Redirect to controller
  handleGetAllShips(req: Request, res: Response) {
    shipController.getAllShip(req, res);
  }

  handleGetShipById(req: Request, res: Response) {
    shipController.getShipByID(req, res);
  }

  handleCreateShip(req: Request, res: Response) {
    shipController.createShip(req, res);
  }

  handleUpdateShip(req: Request, res: Response) {
    shipController.updateShip(req, res);
  }

  handleDeleteShip(req: Request, res: Response) {
    shipController.deleteShip(req, res);
  }
}
