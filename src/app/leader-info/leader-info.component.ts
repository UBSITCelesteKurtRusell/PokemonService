import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-leader-card',
  standalone: true,
  templateUrl: `./leader-info.component.html`,
  styleUrl: `./leader-info.component.css`
})
export class LeaderInfoComponent {
  name = input<string>('');
  specialty = input<string>('');
  monologue = input<string>('');

  isVisible = signal(false);

  toggle() {
    this.isVisible.set(!this.isVisible());
  }
}