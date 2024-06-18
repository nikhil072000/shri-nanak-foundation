import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'gallery', component: GalleryComponent }
];
