import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DjPage } from './dj';

@NgModule({
  declarations: [
    DjPage,
  ],
  imports: [
    IonicPageModule.forChild(DjPage),
  ],
})
export class DjPageModule {}
