import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule} from '@angular/material/radio';

const components = [
  MatButtonModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatDatepickerModule,
  MatRadioModule
];
@NgModule({
  imports: [CommonModule, ...components],
  exports: [...components],
})
export class MaterialModule {}
