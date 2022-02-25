import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    HomepageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbModule,
  ],
 
})
export class HomepageModule { }
