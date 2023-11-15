import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './features/user/user.component';
import { ChambreComponent } from './features/chambre/chambre.component';
import { UniversiteComponent } from './features/universite/universite.component';
import { BlocComponent } from './features/bloc/bloc.component';
import { ReservationComponent } from './features/reservation/reservation.component';
import { FoyerComponent } from './features/foyer/foyer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChambreComponent,
    UniversiteComponent,
    BlocComponent,
    ReservationComponent,
    FoyerComponent,
  ],

  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
