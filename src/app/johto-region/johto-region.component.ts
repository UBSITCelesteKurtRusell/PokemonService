import { Component } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

@Component({
  selector: 'app-johto-region',
  imports: [LeaderInfoComponent],
  templateUrl: './johto-region.component.html',
  styleUrl: './johto-region.component.css',
})
export class JohtoRegion {
  leaders = [
    { name: 'Brock', type: 'Rock', text: 'My willpower is rock solid!' },
    { name: 'Misty', type: 'Water', text: 'The world-famous beauty!' }
  ];
}
