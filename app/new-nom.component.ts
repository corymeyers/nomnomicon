import {Component, EventEmitter} from 'angular2/core';
import {Nom} from './nom.model';

@Component({
  selector: 'new-nom',
  outputs: ['onSubmitNewNom'],
  template: `
  <div class="nom-form">
     <h3>NewNomNom:</h3>
       <input placeholder="NomName" class="col-sm-8 input-lg" #newName>
       <input placeholder="NomDeets" class="col-sm-8 input-lg" #newDetails>
       <input placeholder="NomCalories" class="col-sm-8 input-lg" #newCalories>
     <button (click)="addNom(newName, newDetails, newCalories)">Add</button>
  </div>
  `
})
export class NewNomComponent {
  public onSubmitNewNom: EventEmitter<Nom>;
  constructor(){
    this.onSubmitNewNom = new EventEmitter();
  }
  addNom(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var newNom = new Nom(newName.value, newDetails.value, parseInt(newCalories.value));
    this.onSubmitNewNom.emit(newNom);
    newName.value="";
    newDetails.value="";
    newCalories.value="";
  }
}
