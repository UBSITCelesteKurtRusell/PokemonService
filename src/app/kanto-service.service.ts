import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KantoServiceService {

private kanto = signal([
  {
    name: 'Brock',
    leaderBadge: 'Boulder Badge',
    team: ['Geodude', 'Onix'],
    town: 'Pewter City',
    Specialty: 'Rock type pokemon'
  },
  {
    name: 'Misty',
    leaderBadge: 'Cascade Badge',
    team: ['Staryu', 'Starmie'],
    town: 'Cerulean City',
    Specialty: 'Water type pokemon'
  },
  {
    name: 'Lt. Surge',
    leaderBadge: 'Thunder Badge',
    team: ['Voltorb', 'Raichu'], // Limited to 2
    town: 'Vermilion City',
    Specialty: 'Electric type pokemon'
  },
  {
    name: 'Erika',
    leaderBadge: 'Rainbow Badge',
    team: ['Victreebel', 'Vileplume'], // Limited to 2
    town: 'Celadon City',
    Specialty: 'Grass type pokemon'
  },
  {
    name: 'Koga',
    leaderBadge: 'Soul Badge',
    team: ['Koffing', 'Weezing'], // Limited to 2
    town: 'Fuchsia City',
    Specialty: 'Poison type pokemon'
  },
  {
    name: 'Sabrina',
    leaderBadge: 'Marsh Badge',
    team: ['Kadabra', 'Alakazam'], // Limited to 2
    town: 'Saffron City',
    Specialty: 'Psychic type pokemon'
  },
  {
    name: 'Blaine',
    leaderBadge: 'Volcano Badge',
    team: ['Rapidash', 'Arcanine'], // Limited to 2
    town: 'Cinnabar Island',
    Specialty: 'Fire type pokemon'
  },
  {
    name: 'Giovanni',
    leaderBadge: 'Earth Badge',
    team: ['Rhydon', 'Nidoking'], // Limited to 2
    town: 'Viridian City',
    Specialty: 'Ground type pokemon'
  }
]);

// Expose signal as read-only
trainers = this.kanto.asReadonly();
}