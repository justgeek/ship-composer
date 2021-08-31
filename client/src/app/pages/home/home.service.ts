import { endpoints } from '../../../config/endpoints.config';
import { HttpProviderService } from '../../providers/http-provider/http-provider.service';
import { Injectable } from '@angular/core';

export interface Ship {
  name: String;
  length: Number;
  width: Number;
  code: String;
  id: string;
}

export interface GetShipResponse extends Ship {}

export type CreateShipPayload = Omit<Ship, 'id'>;

export interface CreateShipResponse extends Ship {}

export interface UpdateShipPayload extends Ship {}

export interface UpdateShipResponse extends Ship {}

export interface DeleteShipPayload {
  id: string;
}

export interface DeleteShipResponse {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpProvider: HttpProviderService) {}
  public async getAllShips(): Promise<Ship[]> {
    return this.httpProvider.createHttpRequest<Ship[]>({
      method: 'GET',
      url: `${endpoints.shipComposerAPI.baseUrl}/ships`,
    });
  }
  public async getShipById(id: string): Promise<GetShipResponse> {
    return this.httpProvider.createHttpRequest<GetShipResponse>({
      method: 'GET',
      url: `${endpoints.shipComposerAPI.baseUrl}/ship/${id}`,
    });
  }
  public async createShip(
    ship: CreateShipPayload
  ): Promise<CreateShipResponse> {
    return this.httpProvider.createHttpRequest<CreateShipResponse>({
      method: 'POST',
      url: `${endpoints.shipComposerAPI.baseUrl}/ships`,
      data: ship,
    });
  }

  public async updateShip(id: string, ship: Ship): Promise<UpdateShipResponse> {
    return this.httpProvider.createHttpRequest<UpdateShipPayload>({
      method: 'PUT',
      url: `${endpoints.shipComposerAPI.baseUrl}/ships/${id}`,
      data: ship,
    });
  }

  public async deleteShip(id: string): Promise<DeleteShipResponse> {
    return this.httpProvider.createHttpRequest<DeleteShipResponse>({
      method: 'DELETE',
      url: `${endpoints.shipComposerAPI.baseUrl}/ships/${id}`,
    });
  }
}
