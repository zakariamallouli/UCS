import { Component } from '@angular/core';
import { NextComponent } from '../next/next.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-section1',
  standalone: true,
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
  imports: [NextComponent,TitleComponent]
})
export class Section1Component {

}
