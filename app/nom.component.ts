import { Component, EventEmitter } from 'angular2/core';
import { Nom } from './nom.model';

@Component({
    selector: 'nom-display',
    inputs: ['nom'],
  template:`
    <h3>{{ nom.name }} - {{nom.details}} - {{nom.calories}} calories</h3>
  `
})

export class NomComponent {
  public nom: Nom;
}
