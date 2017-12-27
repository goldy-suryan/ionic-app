import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { TeamHomePage } from "../exports";
import { EliteService } from "../shared/shared";

@Component({
    selector: "teams",
    templateUrl: "./teams.html"
})

export class TeamsPage {
    private tournament: { id: string, name: string };
    private teams: any;

    constructor( private nav: NavController,
                private navParams: NavParams,
                private service: EliteService,
                private loader: LoadingController ) {}
    
    ionViewDidLoad() {
        this.tournament = this.navParams.data;

        let loader = this.loader.create({
            content: "Getting Teams..."
        });

        loader.present();
        this.service.getTournamentsData(this.tournament.id).subscribe(
            data => {
                this.teams = data.teams;
                loader.dismiss();
            },
            err => console.log(err)
        );
    }

    itemTapped(event, team) {
        this.nav.push(TeamHomePage, team);
    }
    
}