import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';
import {NgFor} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  src: string;
}
@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [CommonModule,TitleComponent,MatGridListModule, NgFor],
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css'],
})
export class Section3Component {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', src: 'assets/images/footer.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', src: 'assets/images/mary.jpg'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', src: 'assets/images/palestine.jpg'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', src: 'assets/images/tg2.jpg'},
  ];
}
