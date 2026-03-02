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
    },//Add 3 more trainers
    {
      name: 'Brock',
      team:['Onix','Crobat'],
      items: ['Hard Stone','Everstone']

    },
    {
      name:'Sabrina',
      team: ['Alkazam','Espeon'],
      items: ['Twisted Spoon','None', 'Focus Sash']      
    },
      {
      name:'Gary Oak',
      team: ['Blastoise','Psyduck'],
      items: ['Mystic Water','None', 'Gyaradosite']      
    }
  ]);
  //Expose signal as read-only
  trainers = this.registry.asReadonly();
}
