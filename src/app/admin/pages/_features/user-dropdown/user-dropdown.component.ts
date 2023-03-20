import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { map, Observable } from 'rxjs';
import { UserService } from './user.service';

export interface IUser {
  id: number;
  name: string;
}

@Component({
  standalone: true, // başka modüllerden de import edilip çağırılabilmesi için standAlone true yaparız. Not: Angular V14 sonrasında geldi öncesinde bu özellik çalışmaz
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css'],
  imports: [MatSelectModule, CommonModule, FormsModule], // material arayüzlerini kendi başına module olmadan kullanabilmesi için gerekli olan modülleri imports kısmına yazarız
})
export class UserDropdownComponent implements OnInit {
  users$!: Observable<IUser[]>;

  @Output() onSelect = new EventEmitter<IUser>();

  @Input() selected!: IUser;

  constructor(private userS: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userS.getAllUsers();
  }

  select(selectedId: number) {
    console.log('selectedId', selectedId);
    this.users$
      .pipe(
        map((data: IUser[]) => {
          console.log('map', data);
          return data.find((x) => x.id == selectedId);
        })
      )
      .subscribe((res: any) => {
        this.selected = { ...res };
        this.onSelect.emit(this.selected);
        console.log('res', res);
      });
  }
}
