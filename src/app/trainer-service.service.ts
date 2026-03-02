import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {
  //defining 5 trainers with teams and items
  private registry = signal([
    {
      name: 'Ash Ketchum',
      team:['Pikachu','Charizard'],
      items: ['Light ball','Charizard Y']

    },
    {
      name:'Misty',
      team: ['Starmie','Psyduck'],
      items: ['Mystic Water','None', 'Gyaradosite']      
    }//Add 3 more trainers
  ]);
  //Expose signal as read-only
  trainers = this.registry.asReadonly();
}
