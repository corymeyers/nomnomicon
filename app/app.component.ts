import { Component, EventEmitter } from 'angular2/core';

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

@Component({
  selector: 'nom-list',
  inputs: ['nomList'],
  outputs: ['onNomSelect'],
  directives: [NomComponent],
  template: `
    <nom-display *ngFor="#currentNom of nomList"
      (click)="nomClicked(currentNom)"
      [class.selected]='currentNom === selectedNom'
      [nom]="currentNom">
    </nom-display>
  `
})

export class NomListComponent {
  public nomList: Nom[];
  public onNomSelect: EventEmitter<Nom>;
  public selectedNom: Nom;
  constructor() {
    this.onNomSelect = new EventEmitter();
  }
  nomClicked(clickedNom: Nom): void {
    console.log('child', clickedNom);
    this.selectedNom= clickedNom;
    this.onNomSelect.emit(clickedNom);
  }
}

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

export class Nom {
  constructor(public name: string, public details: string, public calories: number){
  }
}
