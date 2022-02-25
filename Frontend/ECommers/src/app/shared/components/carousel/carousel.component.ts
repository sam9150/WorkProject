import { Component, OnInit } from '@angular/core';  
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { image1 } from '../common';
@Component({  
  selector: 'app-carousel',  
  templateUrl: './carousel.component.html',  
  styleUrls: ['./carousel.component.scss']  
})  
export class CarouselComponent  {  
  
  

  
  // images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  // constructor(config: NgbCarouselConfig) {
  //   // customize default values of carousels used by this component tree
  //   config.interval = 10000;
  //   config.wrap = false;
  //   config.keyboard = false;
  //   config.pauseOnHover = false;
  // }
  // name = 'Angular';
  // imageObject = [{
  //   posterImage: 'https://picsum.photos/900/500?random&t=1',
      
  // }, {
  //   posterImage: 'https://picsum.photos/900/500?random&t=3',
  //     // alt: 'youtube video'
  // }, {
  //     // /video: 'https://picsum.photos/900/500?random&t=1',
  //     posterImage: "https://picsum.photos/900/500?random&t=2",
  //     // title: 'Youtube example one with title.'
  // }]
  imageObject: Array<object> = [{
    // image: 'https://picsum.photos/900/500?random&t=3',
    thumbImage: 'assets/images/3.png',
  //  / alt: 'alt of image',
    // title: 'title of image'
}, {
    // image: 'https://picsum.photos/900/500?random&t=1', // Support base64 image
    thumbImage: 'assets/images/2.png', // Support base64 image
    // title: 'Image title', //Optional: You can use this key if want to show image with title
    // alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];
}  
