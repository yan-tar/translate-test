import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { initializePhraseAppEditor } from "ngx-translate-phraseapp";
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    // let config = {
    //   projectId: '5e1ecc316728212e7fea2c81190e1167',
    //   phraseEnabled: true,
    //   prefix: "{{__",
    //   suffix: "__}}",
    //   fullReparse: true
    // };

    // initializePhraseAppEditor(config);
  }
}
