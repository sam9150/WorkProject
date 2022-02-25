import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TopspaceComponent } from './components/topspace/topspace.component';
// import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopspaceComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCarouselModule,
    NgImageSliderModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    TopspaceComponent,
    CarouselComponent,

  ]
})
export class SharedModule { }
