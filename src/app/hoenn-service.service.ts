import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoennServiceService {
private registry = signal([
  //Gym Leaders Badge, Pokemon Team, Town, Name and Specialty.
    {
      name: 'Roxanne',
      leaderBadge:'Stone Badge',
      team:['Pikachu','Charizard'],
      town: 'Rustboro City',
      Specialty:'Rock'

    },
    {
      name: 'Roxanne',
      leaderBadge:'Stone Badge',
      team:['Pikachu','Charizard'],
      town: 'Rustboro City',
      Specialty:'Rock'  
    },//Add 3 more trainers
    {
      name: 'Roxanne',
      leaderBadge:'Stone Badge',
      team:['Pikachu','Charizard'],
      town: 'Rustboro City',
      Specialty:'Rock'
    },
    {
      name: 'Roxanne',
      leaderBadge:'Stone Badge',
      team:['Pikachu','Charizard'],
      town: 'Rustboro City',
      Specialty:'Rock'  
    },
      {
      name: 'Roxanne',
      leaderBadge:'Stone Badge',
      team:['Pikachu','Charizard'],
      town: 'Rustboro City',
      Specialty:'Rock'
    }
  ]);
  //Expose signal as read-only
  trainers = this.registry.asReadonly();
}
