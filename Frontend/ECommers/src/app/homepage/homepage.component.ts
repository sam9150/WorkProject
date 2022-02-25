import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdCarouselConfig } from './carousel-config';
import { OwlModule } from 'ngx-owl-carousel'; 
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {
  title = 'owlcarouselinAngular'; 
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

}
