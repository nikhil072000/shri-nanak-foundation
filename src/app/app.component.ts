import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { GalleryComponent } from "./gallery/gallery.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, GalleryComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'shri-nanak-foundation';
}
