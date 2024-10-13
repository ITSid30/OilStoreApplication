import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oil } from '../model';
import { HttpClient, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OilService {

  private userUrl: string = '';

  constructor(
    private httpClient: HttpClient
  ) {
    this.userUrl = 'http://localhost:8080/oils';
  }

  public getAllOils(): Observable<Oil[]> {
    return this.httpClient.get<Oil[]>(this.userUrl);
  }

  public getOil(oilId: number): Observable<Oil> {
    return this.httpClient.get<Oil>(this.userUrl+`/${oilId}`);
  }

  public addOil(oil: Oil): Observable<Oil> {
    return this.httpClient.post<Oil>(this.userUrl, oil);
  }

  public updateOil(oil: Oil): Observable<Oil> {
    return this.httpClient.put<Oil>(this.userUrl, oil);
  }

  public deleteOil(oilId: number): Observable<any> {
    return this.httpClient.delete(this.userUrl+ `/${oilId}`);
  }

}
