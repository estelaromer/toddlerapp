import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import {AlwaysPassGuard} from './alwayspassguard';
import { MainappComponent } from './mainapp/mainapp.component';


export const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'app', component: MainappComponent, canActivate: [AlwaysPassGuard]}
];
