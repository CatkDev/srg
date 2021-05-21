import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTraitsPage } from './all-traits';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    AllTraitsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllTraitsPage),
    TranslateModule
  ],
    exports: [AllTraitsPage]
})
export class AllTraitsPageModule {}
