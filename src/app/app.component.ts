import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { GalleryComponent } from "./gallery/gallery.component";
import { EventsComponent } from './events/events.component';
import { MediaCoverageComponent } from './media-coverage/media-coverage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonationComponent } from './donation/donation.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, GalleryComponent, DonationComponent, AboutUsComponent, MediaCoverageComponent, EventsComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'shri-nanak-foundation';
}
