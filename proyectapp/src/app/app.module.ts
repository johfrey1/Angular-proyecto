import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

//services
import { HeroesServices } from './servicios/heroes.service';

/* import routes */
import { appRouting } from './app.routes';
import { SharedComponent } from './components/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    HeroesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
