import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountComponent } from './account/account.component';
import { NewComponent } from './new/new.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ProfileComponent } from './profile/profile.component';
import {AlwaysPassGuard} from './alwayspassguard';


export const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'app/profile', component: ProfileComponent, canActivate: [AlwaysPassGuard]}
];
