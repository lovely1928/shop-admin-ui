import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatLabel, MatInput, MatFormField } from '@angular/material/input';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    FormsModule,
    JsonPipe,
    MatLabel,
    MatInput,
    MatFormField,
    MatButton,
  ],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  // ngModelGroup directive is used to group input fields values into single obj
  // for e.g. user's address
  constructor(public dialogRef: MatDialogRef<UserformComponent>) {}

  // @Output() userFormData = new EventEmitter<any>();
  submitForm(values: any) {
    // this.userFormData.emit(valu/es);
    this.dialogRef.close(values);
  }
}
