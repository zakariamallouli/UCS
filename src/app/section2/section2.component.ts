import { Component,ViewChild } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { TitleComponent } from '../title/title.component';
@Component({
  selector: 'app-section2',
  standalone: true,
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'],
  imports: [
    TitleComponent,
    MatExpansionModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,]
})
export class Section2Component {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
