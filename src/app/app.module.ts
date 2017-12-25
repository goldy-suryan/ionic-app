import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { MyTeamsPage, TeamDetailsPage, TeamsPage, TournamentPage } from "../pages/exports";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyTeamsPage,
    TeamDetailsPage,
    TeamsPage,
    TournamentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyTeamsPage,
    TeamDetailsPage,
    TeamsPage,
    TournamentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
