import { Component } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
