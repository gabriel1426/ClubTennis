import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeetimePage } from './teetime';

@NgModule({
  declarations: [
    TeetimePage,
  ],
  imports: [
    IonicPageModule.forChild(TeetimePage),
  ],
})
export class TeetimePageModule {}
