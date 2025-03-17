import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  itemId: any = "";

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || "";
  }

}
