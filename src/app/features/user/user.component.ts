import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { UserformComponent } from './userform/userform.component';
import { USER_DATA } from '../../common/data-contants/users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ListComponent, MatButton],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public allUsers = USER_DATA;
  constructor(public dialogue: MatDialog) {}

  openDialogue() {
    const dialogRef = this.dialogue.open(UserformComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result.user.name) { 
        this.allUsers = [...this.allUsers, result];
      }
      console.log(this.allUsers);
    });
  }
}
