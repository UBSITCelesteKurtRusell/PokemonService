import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KantoRegion} from './kanto-region/kanto-region.component';
import { JohtoRegion} from './johto-region/johto-region.component';
import { NavComponent} from './nav/nav.component';
import { HoennRegion} from './hoenn-region/hoenn-region.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoRegion},
  { path: 'johto', component: JohtoRegion},
  {path: 'hoenn', component: HoennRegion},
  {path: 'nav', component: NavComponent}
];