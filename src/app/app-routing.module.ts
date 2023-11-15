import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './features/user/user.component';
import { FoyerComponent } from './features/foyer/foyer.component';
import { UniversiteComponent } from './features/universite/universite.component';
import { BlocComponent } from './features/bloc/bloc.component';
import { ChambreComponent } from './features/chambre/chambre.component';
import { ReservationComponent } from './features/reservation/reservation.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'foyers', component: FoyerComponent },
  { path: 'universites', component: UniversiteComponent },
  { path: 'blocs', component: BlocComponent },
  { path: 'chambres', component: ChambreComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
