import { Component } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';


@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfoComponent],
  templateUrl: `./kanto-region.component.html`,
  styleUrl:`./kanto-region.component.css`
})
export class KantoRegion {
  leaders = [
    { name: 'Brock', type: 'Rock', text: 'My willpower is rock solid!' },
    { name: 'Misty', type: 'Water', text: 'The world-famous beauty!' }
  ];
}