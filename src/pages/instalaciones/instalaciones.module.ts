import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstalacionesPage } from './instalaciones';

@NgModule({
  declarations: [
    InstalacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(InstalacionesPage),
  ],
})
export class InstalacionesPageModule {}
