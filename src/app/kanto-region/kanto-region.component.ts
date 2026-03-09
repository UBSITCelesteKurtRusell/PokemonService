import { Component,inject } from '@angular/core';

import { KantoServiceService } from '../kanto-service.service';


@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [],
  templateUrl: `./kanto-region.component.html`,
  styleUrl:`./kanto-region.component.css`
})
export class KantoRegion {
  kantoService = inject(KantoServiceService);
  
}