import { TestBed } from '@angular/core/testing';
import { HomeService } from '../../../home.service';
import { testShip } from '../../../__mocks__/home.page.mock';
import { ShipCardComponent } from '../ship-card.component';

class HomeServiceMock {
  constructor() {}
  getAllShips = jest.fn(() => {
    return new Promise((resolve) => {
      resolve([testShip]);
    });
  });
  httpProvider = {
    createHttpRequest: jest.fn(),
  };
}

describe('ShipCardComponent', () => {
  let shipCardComponent: ShipCardComponent;
  let homeService: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        ShipCardComponent,
        { provide: HomeService, useClass: HomeServiceMock },
      ],
    });
    // inject both the component and the dependent service.
    shipCardComponent = TestBed.inject(ShipCardComponent);
    homeService = TestBed.inject(HomeService);
  });

  it('should create the home page', () => {
    expect(shipCardComponent).toBeTruthy();
  });

  describe('ShipCardComponent Component Methods', () => {
    it('should emit updateShip when triggered', () => {
      const updateShipEventSpy = jest.spyOn(
        shipCardComponent.updateShipEvent,
        'emit'
      );
      shipCardComponent.updateShip(testShip);
      expect(updateShipEventSpy).toHaveBeenCalled();
    });
    it('should emit deleteShip when triggered', () => {
      const deleteShipEventSpy = jest.spyOn(
        shipCardComponent.deleteShipEvent,
        'emit'
      );
      shipCardComponent.deleteShip(testShip);
      expect(deleteShipEventSpy).toHaveBeenCalled();
    });

    it('should delete city on confirmCityDeletion', () => {
      jest.spyOn(window, 'confirm').mockReturnValueOnce(true);
      shipCardComponent.confirmShipDeletion(testShip);
      expect(window.confirm).toHaveBeenCalled();
    });
  });
});
