import { Component,inject } from '@angular/core';
import { JohtoServiceService } from '../johto-service.service';



@Component({
  selector: 'app-johto-region',
  standalone:true,
  imports: [],
  templateUrl: './johto-region.component.html',
  styleUrl: './johto-region.component.css',
})
export class JohtoRegion {
   johtoService = inject(JohtoServiceService);
}
