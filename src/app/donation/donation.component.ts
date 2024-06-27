import { Component } from '@angular/core';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {
  showQr() {
    window.open('../../assets/img/qr.png', '_blank');
  }
}
