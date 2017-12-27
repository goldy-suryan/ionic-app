import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';

@Component({
    selector: "game",
    templateUrl: "./game.html"
})

export class GamePage {
    constructor( private nav: NavController ) { }
}