import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { MyTeamsPage, TeamDetailsPage, TeamsPage, TournamentPage, GamePage } from "../pages/exports";
import { EliteService } from "../pages/shared/shared";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyTeamsPage,
    TeamDetailsPage,
    TeamsPage,
    TournamentPage,
    GamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyTeamsPage,
    TeamDetailsPage,
    TeamsPage,
    TournamentPage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteService
  ]
})
export class AppModule {}
