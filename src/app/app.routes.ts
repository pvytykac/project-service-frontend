import { Routes } from '@angular/router';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/status-page', pathMatch: 'full'},
    {path: 'status-page', component: StatusPageComponent},
    {path: 'notification-settings', component: NotificationSettingsComponent},
    {path: '**', component: PageNotFoundComponent},
];
