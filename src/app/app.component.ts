import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { TrainerDisplayComponent } from './trainer-display/trainer-display.component';
import { HoennRegion } from './hoenn-region/hoenn-region.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,TrainerDisplayComponent,HoennRegion],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
