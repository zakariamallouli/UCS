import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Section1Component } from '../section1/section1.component';
import { SliderComponent } from '../slider/slider.component';
import { Section2Component } from '../section2/section2.component';
import { Section3Component } from '../section3/section3.component';
import { Section4Component } from '../section4/section4.component';
import { VideoComponent } from '../video/video.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-loading-page',
  standalone: true,
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css'],
  imports: [
    HeaderComponent,
    SliderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    VideoComponent,
    FooterComponent]
})
export class LoadingPageComponent {

}
