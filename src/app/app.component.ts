import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})

export class SrgApp {
    rootPage: string = "HomePage";

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('de');
        translate.use('de');
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }

}

