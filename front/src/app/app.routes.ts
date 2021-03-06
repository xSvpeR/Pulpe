import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {EvolutionComponent} from './evolution/evolution.component';
import {ProgramComponent} from './program/program.component';
import {SignupComponent} from './Signup/signup.component';
import {ProfileCompletationComponent} from './profile/profile-completation/profile-completation.component';
import {SessionsComponent} from "./sessions/sessions.component";
import {ProgramResolver} from "./program/program.resolver";
import {AuthenticationGuard} from "./_guards/authentication-guard.service";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProfileComponent} from "./profile/profile.component";
import {SessionsResolver} from "./sessions/sessions.resolver";
import {ProfileResolver} from "./profile/profile.resolver";
import {EvolutionResolver} from "./evolution/evolution.resolver";
import {ProfileCompletedGuardService} from "./_guards/profile-completed-guard.service";

// Route Configuration
export const ROUTES: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: HomeComponent,
    canActivate: [AuthenticationGuard, ProfileCompletedGuardService]
  },
  {
    path: 'inscription',
    component: SignupComponent
  },
  {
    path: 'connexion',
    component: SigninComponent
  },
  {
    path: 'programme',
    component: ProgramComponent,
    resolve: {
      program: ProgramResolver,
    },
    canActivate: [AuthenticationGuard, ProfileCompletedGuardService]
  },
  {
    path: 'evolution/:id',
    component: EvolutionComponent,
    canActivate: [AuthenticationGuard, ProfileCompletedGuardService],
    resolve: {
      evolution: EvolutionResolver
    }
  },
  {
    path: 'seances',
    component: SessionsComponent,
    canActivate: [AuthenticationGuard, ProfileCompletedGuardService],
    resolve: {
      sessions: SessionsResolver
    }
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthenticationGuard, ProfileCompletedGuardService],
    resolve: {
      profile: ProfileResolver
    }
  },
  {
    path: 'profil/complete',
    component: ProfileCompletationComponent,
    canActivate: [AuthenticationGuard]
  }
  //{path: '', redirectTo: '/', pathMatch: 'full'}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
