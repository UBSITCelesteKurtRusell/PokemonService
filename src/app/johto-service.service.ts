import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JohtoServiceService {


  //Gym Leaders Badge, Pokemon Team, Town, Name and Specialty.
    private johto = signal([
  {
    name: 'Falkner',
    leaderBadge: 'Zephyr Badge',
    team: ['Pidgey', 'Pidgeotto'],
    town: 'Violet City',
    Specialty: 'Flying type pokemon'
  },
  {
    name: 'Bugsy',
    leaderBadge: 'Hive Badge',
    team: ['Scyther', 'Metapod'], // Limited to 2
    town: 'Azalea Town',
    Specialty: 'Bug type pokemon'
  },
  {
    name: 'Whitney',
    leaderBadge: 'Plain Badge',
    team: ['Clefairy', 'Miltank'],
    town: 'Goldenrod City',
    Specialty: 'Normal type pokemon'
  },
  {
    name: 'Morty',
    leaderBadge: 'Fog Badge',
    team: ['Haunter', 'Gengar'], // Limited to 2
    town: 'Ecruteak City',
    Specialty: 'Ghost type pokemon'
  },
  {
    name: 'Chuck',
    leaderBadge: 'Storm Badge',
    team: ['Primeape', 'Poliwrath'],
    town: 'Cianwood City',
    Specialty: 'Fighting type pokemon'
  },
  {
    name: 'Jasmine',
    leaderBadge: 'Mineral Badge',
    team: ['Magnemite', 'Steelix'], // Limited to 2
    town: 'Olivine City',
    Specialty: 'Steel type pokemon'
  },
  {
    name: 'Pryce',
    leaderBadge: 'Glacier Badge',
    team: ['Piloswine', 'Dewgong'], // Limited to 2
    town: 'Mahogany Town',
    Specialty: 'Ice type pokemon'
  },
  {
    name: 'Clair',
    leaderBadge: 'Rising Badge',
    team: ['Dragonair', 'Kingdra'], // Limited to 2
    town: 'Blackthorn City',
    Specialty: 'Dragon type pokemon'
  }
]);

// Expose signal as read-only
trainers = this.johto.asReadonly();
}