import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleTraitPage } from './single-trait';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    SingleTraitPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleTraitPage),
    TranslateModule
  ],
    exports: [SingleTraitPage]
})
export class SingleTraitPageModule {}
