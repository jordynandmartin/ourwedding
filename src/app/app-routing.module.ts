import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { AdminComponent } from './admin/admin.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistryComponent } from './registry/registry.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full' },
{path: 'home', component: HomeComponent },
{path: 'rsvp', component: RsvpComponent},
{path: 'photos', component: GalleryComponent},
{path: 'admin', component: AdminComponent},
{path: 'registry', component: RegistryComponent},
{path: 'schedule', component: ScheduleComponent},
{path: 'hotels', component: HotelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
