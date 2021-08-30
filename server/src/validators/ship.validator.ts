import { body, param } from "express-validator";

export default class ShipValidator {
  private codePattern = /[A-Z]{4}-[0-9]{4}-[A-Z]{1}[0-9]{1}/;
  private uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  private writeRules = [
    body("name", "name is required").exists(),
    body("name", "name is invalid").isAlpha("en-US", { ignore: " " }),
    body("width", "width is required").exists(),
    body("width", "width must be  int").isInt(),
    body("length", "length is required").exists(),
    body("length", "length must be  int").isInt(),
    body("code", "code is required").exists(),
    body(
      "code",
      `wrong code format, correct pattern is ${this.codePattern}`
    ).matches(this.codePattern, "g"),
  ];

  private readRules = [
    param("id", `wrong id format, must be uuid`).matches(this.uuidPattern),
  ];
  validateShipId() {
    return this.readRules;
  }
  validateCreateShipPayload() {
    return this.writeRules;
  }
  validateUpdateShipPayload() {
    return this.writeRules;
  }
}
