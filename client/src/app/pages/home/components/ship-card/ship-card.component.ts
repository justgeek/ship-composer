import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ship } from '../../home.service';
@Component({
  selector: 'ship-card',
  styleUrls: ['./ship-card.component.scss'],
  templateUrl: './ship-card.component.html',
})
export class ShipCardComponent {
  @Input() ship!: Ship;
  @Output() deleteShipEvent = new EventEmitter<Ship>();
  @Output() updateShipEvent = new EventEmitter<Ship>();

  confirmShipDeletion(ship: Ship) {
    const { name } = ship;
    /* istanbul ignore else */
    if (confirm(`Sure to remove ${name}?`)) {
      this.deleteShip(ship);
    }
  }

  deleteShip(ship: Ship) {
    this.deleteShipEvent.emit(ship);
  }

  updateShip(ship: Ship) {
    this.updateShipEvent.emit(ship);
  }
}
