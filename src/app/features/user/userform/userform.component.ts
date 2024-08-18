import { CommonModule, JsonPipe } from '@angular/common';
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
import {
  MatLabel,
  MatInput,
  MatFormField,
  MatHint,
  MatInputModule,
} from '@angular/material/input';
import { Output, EventEmitter } from '@angular/core';
import {
  MatDatepicker,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

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
    MatInputModule,
    MatFormField,
    MatFormFieldModule,
    MatButton,
    MatDatepickerModule,
    MatRadioModule,
    CommonModule,
    MatSelectModule,
  ],
  providers: [],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  // ngModelGroup directive is used to group input fields values into single obj
  // for e.g. user's address
  public formClasses = '';
  public genderData: any = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 0, viewValue: 'Other' },
  ];
  srcResult = '';
  constructor(public dialogRef: MatDialogRef<UserformComponent>) {}

  // @Output() userFormData = new EventEmitter<any>();
  submitForm(values: any) {
    // this.userFormData.emit(valu/es);
    console.log('values', values);
    this.dialogRef.close(values);
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}
