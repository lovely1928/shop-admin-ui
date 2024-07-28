import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogTitle, MatDialogClose],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css',
})
export class DialogueComponent {}
