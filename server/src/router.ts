import * as express from "express";
import Ship from "./models/Ship";
import { v4 as uuid } from "uuid";
import cors from "cors";

class Router {
  constructor(server: express.Express) {
    const router = express.Router();

    const ships = new Map<string, Ship>();
    ships[uuid()] = {
      name: "Ajax",
      code: "AAAA-1111-A1",
      width: 50,
      length: 20,
    };
    ships[uuid()] = {
      name: "Aida",
      code: "AAAA-1111-A12",
      width: 100,
      length: 40,
    };

    router.get("/", (req: express.Request, res: express.Response) => {
      res.json({
        message: `Nothing to see here, [url]/ships instead.`,
      });
    });

    //get all ships
    router.get(
      "/ships",
      cors(),
      (req: express.Request, res: express.Response) => {
        res.json({
          ships,
        });
      }
    );

    //create new ship
    router.post(
      "/ships",
      cors(),
      (req: express.Request, res: express.Response) => {
        try {
          let ship: Ship = {} as Ship;
          Object.assign(ship, req.body);
          const newUUID = uuid();
          ships[newUUID] = ship;
          res.json({
            uuid: newUUID,
          });
        } catch (e) {
          res
            .status(400)
            .send(JSON.stringify({ error: "problem with posted data" }));
        }
      }
    );

    //get ship by id
    router.get(
      "/ships/:id",
      cors(),
      (req: express.Request, res: express.Response) => {
        if (!!ships[req.params.id]) {
          res.json({
            ship: ships[req.params.id],
          });
        } else {
          res.status(404).send(JSON.stringify({ error: "no such ship" }));
        }
      }
    );

    //update ship
    router.put(
      "/ships/:id",
      cors(),
      (req: express.Request, res: express.Response) => {
        try {
          if (!!ships[req.params.id]) {
            let ship: Ship = {} as Ship;
            Object.assign(ship, req.body);
            ships[req.params.id] = ship;
            res.json({
              ship: ships[req.params.id],
            });
          } else {
            res.status(404).send(JSON.stringify({ error: "no such ship" }));
          }
        } catch (e) {
          res
            .status(400)
            .send(JSON.stringify({ error: "problem with posted data" }));
        }
      }
    );

    //delete ship
    router.delete(
      "/ships/:id",
      cors(),
      (req: express.Request, res: express.Response) => {
        if (!!ships[req.params.id]) {
          delete ships[req.params.id];
          res.json({
            uuid: req.params.id,
          });
        } else {
          res.status(404).send(JSON.stringify({ error: "no such ship" }));
        }
      }
    );

    router.options("*", cors());

    server.use("/", router);
  }
}

export default Router;
