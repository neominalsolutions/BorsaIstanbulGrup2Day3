import { Component } from '@angular/core';

@Component({
  templateUrl: './role-assignement-page.component.html',
  styleUrls: ['./role-assignement-page.component.css'],
})
export class RoleAssignementPageComponent {
  onSelect(data: any) {
    console.log('data', data);
  }
}
