import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import {AlwaysPassGuard} from './alwayspassguard';
import { MainappComponent } from './mainapp/mainapp.component';
import { ProfileComponent } from './profile/profile.component';
import { NewComponent } from './new/new.component';
import { AlumnoslistComponent } from './alumnoslist/alumnoslist.component';


export const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'app', component: MainappComponent, canActivate: [AlwaysPassGuard], children: [
        { path: 'profile', component: ProfileComponent},
        { path: 'new', component: NewComponent},
        { path: 'alumnos', component: AlumnoslistComponent}
    ]}
];
