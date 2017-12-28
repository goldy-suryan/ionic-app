import { Component } from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';

import { EliteService } from "../shared/elite-api.service";
import { TeamHomePage } from "../exports";

@Component({
    selector: "game",
    templateUrl: "./game.html"
})

export class GamePage {
    game: any;
    constructor( private nav: NavController,
                 private navParams: NavParams,
                 private service: EliteService ) { }

    ionViewDidLoad() {
        this.game = this.navParams.data;
    }

    teamTapped(teamId) {
        let tournamentData = this.service.currentTournament;
        let team = tournamentData.teams.find(t => t.id === teamId);
        this.nav.push(TeamHomePage, team)
    }
}