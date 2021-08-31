import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateHttpRequestOptions } from './http-provider.type';

@Injectable({
  providedIn: 'root',
})

export class HttpProviderService {
  constructor(private http: HttpClient) {}

  public createHttpRequest = async <T>({
    method,
    url,
    data,
    headers,
    httpErrorHandler = undefined,
  }: CreateHttpRequestOptions): Promise<T> => {
    try {
      const request = await this.getRequestMethod(method, url, data, {
        headers: headers,
      })!.toPromise();
      return request as T;
    } catch (error) {
      console.error(error);
      if (!httpErrorHandler) {
        this.handleErrorByStatus(error.status);
      } else {
        httpErrorHandler(error);
      }
      throw error;
    }
  };

  private getRequestMethod(
    method: string,
    url: string,
    data: object,
    headers: object
  ) {
    switch (method) {
      case 'GET':
        return this.http.get(url, headers);
      case 'POST':
        return this.http.post(url, data, headers);
      case 'PUT':
        return this.http.put(url, data, headers);
      case 'DELETE':
        return this.http.delete(url, data);
      default:
        return null;
    }
  }

  public async handleErrorByStatus(errorStatusCode: number) {
    let message = '';
    let shouldLogOutUser = false;
    switch (errorStatusCode) {
      case -1:
        message = 'Connection Timeout';
        break;
      case 0:
        message = 'Connection Error!';
        break;
      case 400:
        message = 'Bad Request. Please try again later.';
        break;
      case 401:
        message = 'Unauthorized Access, please login again';
        shouldLogOutUser = true;
        break;
      case 403:
        message = 'Access Rejected';
        break;
      case 404:
        message = 'Not Found!';
        break;
      case 500:
        message = 'An error occurred on our side, please try again later';
        break;
      default:
        message = 'Something went wrong try again later.';
        break;
    }

    await this.showMessage(message);
    //Check for 401s
    if (shouldLogOutUser) {
    }
  }

  public async showMessage(message: string) {
    alert(message);
  }
}
