import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { EliteService } from "../shared/shared";

import * as _ from "underscore";

@Component({
    selector: "team-details",
    templateUrl: "./team-details.html"
})

export class TeamDetailsPage {
    team: any;
    tournamentData: any;
    games: any;

    constructor( private nav: NavController,
                 private navParams: NavParams,
                 private service: EliteService) { }

    ionViewDidLoad() {
        this.team = this.navParams.data;

        this.tournamentData = this.service.getCurrentTournament();

        this.games = _.chain(this.tournamentData.games)
                    .filter(game => game.team1Id === this.team.id || game.team2Id === this.team.id)
                    .map(g => {
                        let isTeam1 = (g.team1Id === this.team.id);
                        let opponent = isTeam1? g.team2 : g.team1;
                        let scoreDisplay = this.scoreDisplay(isTeam1, g.team1Score, g.team2Score);
                        return {
                            gameId: g.id,
                            opponent: opponent,
                            time: Date.parse(g.time),
                            location: g.location,
                            scoreDisplay: scoreDisplay,
                            homeAway: (isTeam1? "vs." : "at")
                        };
                    })
                    .value();

        console.log(this.games);
    }

    scoreDisplay(team, score1, score2) {
        if(score1 && score2) {
            var teamScore = (team? score1 : score2);
            var opponentScore = (team? score2 : score1);
            var WinIndicator = teamScore > opponentScore ? "W: " : "L: ";
            return WinIndicator + teamScore + " - " + opponentScore;
        } else {
            return "";
        }
    }
    
}