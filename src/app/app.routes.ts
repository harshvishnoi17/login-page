import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/auth.guard';
import { NonAuthGuard } from './_guards/non-auth.guard';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NonAuthGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [NonAuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [NonAuthGuard] },
  {     path: 'home',
        canActivate: [AuthGuard],
        component: HomeComponent
    },
    {     path: 'org-list',
        canActivate: [AuthGuard],
        component: OrganizationListComponent
    },
    {     path: '',
        pathMatch: 'full',
        redirectTo: "home"
    },
    {
        path: 'users',
        canActivate: [AuthGuard],
        component: UsersComponent
    },
    

];

