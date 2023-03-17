import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUser, UserService } from './services/user.service';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users$!: Observable<IUser[]>;
  users: IUser[] = [];
  sb!: Subscription;

  /**
   *
   */
  constructor(private sS: UserService) {}

  ngOnInit(): void {
    this.users$ = this.sS.getUsers();

    // this.sb = this.sS.getUsers().subscribe((data) => {
    //   this.users = [...data];
    // });
  }

  ngOnDestroy(): void {
    console.log('user-pagden ayrıldı');
    // this.sb.unsubscribe();
  }
}
