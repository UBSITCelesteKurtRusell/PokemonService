import { Component,inject} from '@angular/core';
import { HoennServiceService } from '../hoenn-service.service';

@Component({
  selector: 'app-hoenn-region',
  imports: [],
  templateUrl: './hoenn-region.component.html',
  styleUrl: './hoenn-region.component.css'
})
export class HoennRegion {
 hoennService = inject(HoennServiceService);
}
