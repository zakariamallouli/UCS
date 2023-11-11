import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-next',
  standalone: true,
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class NextComponent {
  @Input() label: string = 'Button Label';

}
