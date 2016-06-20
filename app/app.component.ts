import { Component } from 'angular2/core';

@Component({
  selector: 'nom-list',
  inputs: ['nomList'],
  template: `
  <h3 *ngFor="#currentNom of nomList" (click)="nomClicked(currentNom)">
    {{currentNom.description}}{{currentNom.details}}{{currentNom.calories}}
  </h3>
  `
})

export class NomListComponent {
  public nomList: Nom[];
}

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Nomnomicon</h1>
      <h3 *ngFor=""#nom of noms" (click)="nomWasSelected(nom)">
        {{nom.name}}{{nom.details}}{{nom.calories}}
      </h3>
    </div>
  `
})

export class AppComponent {
  public noms: Nom[
  constructor(){
    this.noms = [
      new Nom("apple", "it was red", 50),
      new Nom("orange", "it was orange", 500),
      new Nom("pizza", "it was red and orange", 5089),
    ];
  }
  nomWasSelected(clickedNom: Nom): void {
    console.log(clickedNom);
  }
}

export class Nom {
  constructor(public name: string, public details: string, public calories: number){
  }
}
