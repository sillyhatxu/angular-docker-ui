import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LogsComponent } from './components/logs/logs.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full', data: { preload: false } },
  { path: 'dashboard', component: DashboardComponent, data: { preload: false } },
  { path: 'notifications', component: NotificationsComponent, data: { preload: false } },
  { path: 'logs', component: LogsComponent, data: { preload: false } },
  { path: 'services', component: ServicesComponent, data: { preload: false } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
