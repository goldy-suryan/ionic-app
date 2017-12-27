import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

import { TeamDetailsPage, StandingsPage } from "../exports";

@Component({
    selector: "team-home",
    templateUrl: "./team-home.html"
})

export class TeamHomePage {
    team: any;
    standingsTab: StandingsPage;
    teamDetailsTab: TeamDetailsPage;

    constructor( private navParams: NavParams ) {
        this.team = this.navParams.data;        
     }

    ionViewDidLoad() {
    }
}