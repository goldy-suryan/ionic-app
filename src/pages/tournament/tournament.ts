import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { TeamsPage } from "../exports";

import { EliteService } from "../shared/elite-api.service";

@Component({
    selector: "tournament",
    templateUrl: "./tournament.html"
})

export class TournamentPage {
    tournaments: Array<{ id: string, name: string }>;
    err: any;

    constructor(private nav: NavController,
        private service: EliteService,
        private loader: LoadingController) { }

    itemTapped(event, tournament) {
        this.nav.push(TeamsPage, tournament);
    }

    ionViewDidLoad() {
        let loader = this.loader.create({
            content: "Getting data..."
        })

        loader.present();

        this.service.getTournaments().subscribe(
            tournaments => {
                this.tournaments = tournaments
                loader.dismiss();
            },
            err => this.err = err
        );
    }

}