import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LogsComponent } from './components/logs/logs.component';
import { ServicesComponent } from './components/services/services.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeadComponent } from './components/head/head.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    NotificationsComponent,
    LogsComponent,
    ServicesComponent,
    LayoutComponent,
    HeadComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
