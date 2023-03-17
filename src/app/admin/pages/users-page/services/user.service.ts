import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  company?: IUserCompany;
}

export interface IUserCompany {
  name: string;
  bs: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getUserDetail(username: string) {
    return this.httpClient
      .get<IUser>(
        `https://jsonplaceholder.typicode.com/users?username=${username}`
      )
      .pipe(
        map((data: any) => {
          console.log('data', data);
          return data[0];
        })
      );
  }
}
