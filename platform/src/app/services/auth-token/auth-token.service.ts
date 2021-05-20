import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  private readonly RANDOM_STRING_API_URL =
    'https://cors-anywhere.herokuapp.com/http://www.randomnumberapi.com/api/v1.0/randomstring?min=10&max=10&count=1';

  constructor(private http: HttpClient) {}

  public getAuthToken(): any {
    const headers = { headers: 'origin: *' };
    return this.http.get(this.RANDOM_STRING_API_URL, { headers });
  }
}
