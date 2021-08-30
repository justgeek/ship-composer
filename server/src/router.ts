import * as express from "express";
import cors from "cors";
import ShipHanlder from "./handlers/ship.handler";
import ShipValidator from "./validators/ship.validator";
class Router {
  constructor(server: express.Express) {
    const router = express.Router();
    const shipHandler = new ShipHanlder();
    const shipValidator = new ShipValidator();

    router.get("/", (req: express.Request, res: express.Response) => {
      res.json({
        message: `Nothing to see here, [url]/ships instead.`,
      });
    });

    //get all ships
    router.get("/ships", cors(), shipHandler.handleGetAllShips);

    //create new ship
    router.post(
      "/ships",
      ...shipValidator.validateCreateShipPayload(),
      cors(),
      shipHandler.handleCreateShip
    );

    //get ship by id
    router.get(
      "/ships/:id",
      ...shipValidator.validateShipId(),
      cors(),
      shipHandler.handleGetShipById
    );

    //update ship
    router.put(
      "/ships/:id",
      ...shipValidator.validateShipId(),
      ...shipValidator.validateUpdateShipPayload(),
      cors(),
      shipHandler.handleUpdateShip
    );

    //delete ship
    router.delete(
      "/ships/:id",
      ...shipValidator.validateShipId(),
      cors(),
      shipHandler.handleDeleteShip
    );

    router.options("*", cors());

    server.use("/", router);
  }
}

export default Router;
