import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PqrsPage } from './pqrs';

@NgModule({
  declarations: [
    PqrsPage,
  ],
  imports: [
    IonicPageModule.forChild(PqrsPage),
  ],
})
export class PqrsPageModule {}
