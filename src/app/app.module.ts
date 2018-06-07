import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routing';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginareaComponent } from './loginarea/loginarea.component';
import { MainappComponent } from './mainapp/mainapp.component';
import { AccountComponent } from './account/account.component';
import { NewComponent } from './new/new.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent,
    LoginComponent,
    SignupComponent,
    LoginareaComponent,
    MainappComponent,
    AccountComponent,
    NewComponent,
    ApphomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes), 
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
