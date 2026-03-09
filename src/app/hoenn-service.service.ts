import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoennServiceService {
private hoenn = signal([
  //Gym Leaders Badge, Pokemon Team, Town, Name and Specialty.
    {
      name: 'Roxanne',
      leaderBadge:'Stone Badge',
      team:['Geodude','Nosepass'],
      town: 'Rustboro City',
      Specialty:'Rock type pokemon'

    },
    {
      name: 'Brawly',
      leaderBadge:'Knuckle Badge',
      team:['Machop','Makuhita'],
      town: 'Dewford Town',
      Specialty:'Fighting type pokemon'  
    },
    {
      name: 'Wattson',
      leaderBadge:'Dynamo Badge',
      team:['Magnemite','Voltorb'],
      town: 'Mauville City',
      Specialty:'Electric type pokemon'
    },
    {
      name: 'Flannery',
      leaderBadge:'Heat Badge',
      team:['Slugma','Torkoal'],
      town: 'Lavaridge',
      Specialty:'Fire type pokemon'  
    },
      {
      name: 'Norman',
      leaderBadge:'Balance Badge',
      team:['Slaking','Vigoroth'],
      town: 'Petalburg City',
      Specialty:'Normal type pokemon'
    },
    {
      name: 'Winona',
      leaderBadge:'Feather Badge',
      team:['Swellow','Pelipper'],
      town: 'Fortree City',
      Specialty:'Flying type pokemon'
    },
    {
      name: 'Tate & Liza',
      leaderBadge:'Mind Badge',
      team:['Solrock','Lunatone'],
      town: 'Mossdeep City',
      Specialty:'Psychic type pokemon'
    },
    {
      name: 'Wallace',
      leaderBadge:'Rain Badge',
      team:['Luvdisc','Whiscash'],
      town: 'Sootopolis City',
      Specialty:'Water type pokemon'
    },
  ]);
  //Expose signal as read-only
  trainers = this.hoenn.asReadonly();
}
