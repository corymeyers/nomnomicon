import { Component, EventEmitter } from 'angular2/core';
import { NomListComponent } from './nom-list.component';
import { Nom } from './nom.model';

@Component({
  selector: 'my-app',
  directives: [NomListComponent],
  template: `
    <div class="container">
      <h1>Nomnomicon</h1>
      <nom-list
        [nomList]="noms"
        (onNomSelect)="nomWasSelected($event)">
      </nom-list>
    </div>
  `
})

export class AppComponent {
  public noms: Nom[];
  constructor(){
    this.noms = [
      new Nom("apple", "it was red", 50),
      new Nom("orange", "it was orange", 500),
      new Nom("pizza", "it was red and orange", 5089),
    ];
  }
  nomWasSelected(clickedNom: Nom): void {
    console.log('parent', clickedNom);
  }
}
