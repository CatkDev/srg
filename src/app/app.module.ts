import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SrgApp } from './app.component';
import { HttpClientModule, HttpClient} from "@angular/common/http";

import { createTranslateLoader } from "../providers/translate-loader";

import { TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {HttpModule} from "@angular/http";




@NgModule({
  declarations: [
    SrgApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SrgApp),
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SrgApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
