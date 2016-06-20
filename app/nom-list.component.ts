import { Component, EventEmitter } from 'angular2/core';
import { NomComponent } from './nom.component';
import { Nom } from './nom.model';

@Component({
  selector: 'nom-list',
  inputs: ['nomList'],
  outputs: ['onNomSelect'],
  directives: [NomComponent],
  template: `
  <nom-display *ngFor="#currentNom of nomList"
    (click)="nomClicked(currentNom)"
    [class.selected]="currentNom === selectedNom"
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
