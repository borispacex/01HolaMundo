import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
