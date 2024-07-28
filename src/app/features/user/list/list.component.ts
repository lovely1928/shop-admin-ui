import { Component, Input } from '@angular/core';
import { IUser } from '../../../common/types/user/Iuser';
import { USER_DATA } from '../../../common/data-contants/users';
import {
  MatRow,
  MatTable,
  MatColumnDef,
  MatRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatCell,
  MatCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [
    MatTable,
    MatRow,
    MatColumnDef,
    MatRowDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public users: IUser[] = [];
  displayedColumns = ['name', 'email', 'age', 'phone', 'status', 'actions'];
  constructor() {}

  // ngOnInit() {
  //   // call http req to fetch users
  //   this.users = USER_DATA;
  // }
  editUser() {}
  deleteUser() {}
}
