import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL_API: string = "https://randomuser.me/api/?results="
  constructor(private httpClient: HttpClient) { }

  getRandomUsers(numberUsers?: number) {
    return this.httpClient.get(`${this.URL_API + numberUsers|| 10}`);
  }
}
