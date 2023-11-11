import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
const ytbUrl = 'https://www.youtube.com/embed/'
@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  id: string = 'K4vooD7oEI4?si=DV3grqQmszWFWjp5'
  constructor(public stanitizer:DomSanitizer){

  }

  getSafeUrl(){
    return this.stanitizer.bypassSecurityTrustResourceUrl(ytbUrl+this.id) 
  }
}
