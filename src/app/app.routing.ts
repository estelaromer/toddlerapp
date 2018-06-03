import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { AccountComponent } from './account/account.component';
import { NewComponent } from './new/new.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ProfileComponent } from './profile/profile.component';

export const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'app', component: MainappComponent, children: [
        { path: 'account', component: AccountComponent, children: [
            { path: 'new', component: NewComponent },
            { path: 'profile', component: ProfileComponent}
        ]},
        { path: 'home', component: ApphomeComponent}
    ] }
];
