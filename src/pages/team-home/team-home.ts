import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { TeamDetailsPage, StandingsPage, MyTeamsPage } from "../exports";

@Component({
    selector: "team-home",
    templateUrl: "./team-home.html"
})

export class TeamHomePage {
    team: any;
    teamDetailsTab = TeamDetailsPage;
    standingsTab = StandingsPage;
    query: any;

    constructor( private nav: NavController, private navParms: NavParams ) { 
                 this.team = this.navParms.data;
    }

    goHome() {
        this.nav.popToRoot();
    }
}