import { Component, EventEmitter } from 'angular2/core';
import { NomComponent } from './nom.component';
import { Nom } from './nom.model';
import { EditNomDetailsComponent } from './edit-nom-details.component';
import { NewNomComponent } from './new-nom.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'nom-list',
  inputs: ['nomList'],
  outputs: ['onNomSelect'],
  pipes: [CaloriesPipe],
  directives: [NomComponent, EditNomDetailsComponent, NewNomComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <<option value="healthy">Healthy Ones</option>
    <option value="unhealthy">Unhealthy Ones</option>
  </select>

  <nom-display *ngFor="#currentNom of nomList | calories:filterCalories"
    (click)="nomClicked(currentNom)"
    [class.selected]="currentNom === selectedNom"
    [nom]="currentNom">
  </nom-display>

  <edit-nom-details *ngIf="selectedNom" [nom]="selectedNom"> </edit-nom-details>
  
  <new-nom (onSubmitNewNom)="createNom($event)"></new-nom>
  `
})

export class NomListComponent {
  public nomList: Nom[];
  public onNomSelect: EventEmitter<Nom>;
  public selectedNom: Nom;
  public filterCalories: string = "all";
  constructor() {
    this.onNomSelect = new EventEmitter();
  }
  nomClicked(clickedNom: Nom): void {
    this.selectedNom= clickedNom;
    this.onNomSelect.emit(clickedNom);
  }
  createNom(newNom: Nom): void {
    this.nomList.push(newNom);
  }
  onChange(filterOption){
    this.filterCalories = filterOption;
  }
}
