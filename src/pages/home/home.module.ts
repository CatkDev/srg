import {NgModule} from "@angular/core";
import {HomePage} from "./home";
import {ComponentModules} from "../../components/component.modules";
import {IonicPageModule} from "ionic-angular";

@NgModule({
    declarations: [HomePage],
    imports: [
        IonicPageModule.forChild(HomePage),
        ComponentModules],
    exports: [HomePage]

})

export class HomeModule{

}

