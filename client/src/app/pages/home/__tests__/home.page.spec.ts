import { TestBed } from '@angular/core/testing';
import { HomePage } from '../home.page';
import { HomeService } from '../home.service';
import { testShip } from '../__mocks__/home.page.mock';

// This should go to a mock file in ideal world

jest.mock('src/app/utils/validators.util', () => ({
  isAlphaBetString: (str: string) => {
    if (str) {
      return true;
    } else {
      return false;
    }
  },
}));

describe('HomePage', () => {
  let homePage: HomePage;
  let HomeService: HomeService;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [HomeService] });
    homePage = new HomePage(HomeService);
  });

  it('should create the home page', () => {
    const homePage = new HomePage(HomeService);
    expect(homePage).toBeTruthy();
  });

  describe('Home Page Methods', () => {
    it('should add city', () => {
      homePage.ships = [];
      homePage.shipToUpdate = testShip;
      homePage.addShip(testShip);
      expect(homePage.ships.length).toEqual(1);
      expect(homePage.ships[0].name).toEqual(testShip.name);
    });

    it('should delete city on deleteCity', () => {
      const deleteSpy = jest.spyOn(homePage, 'deleteShip');
      homePage.deleteShip(testShip);
      expect(deleteSpy).toHaveBeenCalledWith(testShip);
    });

    it('should delete city', () => {
      homePage.ships = [testShip];
      homePage.deleteShip(testShip);
      expect(homePage.ships.length).toEqual(0);
    });
  });
});
