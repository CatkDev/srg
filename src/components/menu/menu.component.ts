import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
    selector: 'menu',
    templateUrl: 'menu-list.html'
})

export class MenuComponent {
    items = [];

    constructor(private navCtrl: NavController) {
        this.items = [
            {
                'title': 'Einzelnes Merkmal',
                'page': 'SingleTraitPage'
            },
            {
                'title': 'Alle Merkmale',
                'page': 'AllTraitsPage'
            },
            {
                'title': 'Kleinkind Merkmal',
                'page': 'ToddlerTraitPage'
            }
        ]
    }

    openPage(item) {
        this.navCtrl.push(item.page, { item: item });
    }
}
