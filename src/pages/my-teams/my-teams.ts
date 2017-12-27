import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TournamentPage } from "../exports";

@Component({
    selector: "my-teams",
    templateUrl: "./my-teams.html"
})

export class MyTeamsPage {
    constructor( private nav: NavController) { }

    goToTournament() {
        this.nav.push(TournamentPage);
    }
    
}