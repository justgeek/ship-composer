import { HttpErrorResponse } from '@angular/common/http';

export interface CreateHttpRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  headers?: any;
  httpErrorHandler?: (error: HttpErrorResponse) => void;
}
