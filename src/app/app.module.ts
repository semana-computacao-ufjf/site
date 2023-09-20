import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ClockCtaComponent } from './clock-cta/clock-cta.component';
import { EventDescriptionComponent } from './event-description/event-description.component';
import { LogoComponent } from './logo/logo.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterCtaComponent } from './register-cta/register-cta.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { OrganizersListComponent } from './organizers-list/organizers-list.component';
import { OrganizerProfileComponent } from './organizer-profile/organizer-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    ClockCtaComponent,
    EventDescriptionComponent,
    LogoComponent,
    AlertComponent,
    RegisterCtaComponent,
    AwardsComponent,
    ContactSectionComponent,
    OrganizersListComponent,
    OrganizerProfileComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
