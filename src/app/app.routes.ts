import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { MediaCoverageComponent } from './media-coverage/media-coverage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component';
import { MsmeComponent } from './msme/msme.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'gallery', component: GalleryComponent },
{ path: 'msme', component: MsmeComponent },
{ path: 'events', component: EventsComponent },
{ path: 'events/:id', component: EventDetailsComponent },
{ path: 'media-coverage', component: MediaCoverageComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'donation', component: DonationComponent }
];
