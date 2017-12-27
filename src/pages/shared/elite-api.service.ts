import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()

export class EliteService {

    private uri: string = "https://schedule-app-35469.firebaseio.com";
    currentTournament: any;

    constructor( private http: Http) {}

    getTournaments() {
        return this.http.get(`${this.uri}/tournaments.json`).map(res => res.json());
    }

    getTournamentsData(id) {
        return this.http.get(`${this.uri}/tournaments-data/${id}.json`).map(res => {
            this.currentTournament = res.json();
            return this.currentTournament;
        });
    }

    getCurrentTournament() {
        return this.currentTournament;
    }
}