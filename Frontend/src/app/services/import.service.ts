import { Injectable } from '@angular/core';
import { ApiEndpoint } from 'app/model/enum/api-endpoint';
import { AbstractRestService, HttpService } from '@ecoinsoft/core-frontend/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class ImportService extends AbstractRestService {
  
  getUrl(): string {
    return ApiEndpoint.ImportAPI
  }

  constructor(private httpService: HttpService) { 
    super(httpService)
  }
}
