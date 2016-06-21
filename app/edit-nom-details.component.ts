import { Component } from 'angular2/core';
import { Nom } from './nom.model';

@Component({
  selector: 'edit-nom-details',
  inputs: ['nom'],
  template: `
    <div class="nom-form">
      <h3>Edit NomNoms:</h3>
      <input [(ngModel)]="nom.name" class="col-sm-4 input-lg nom-form"/>
      <input [(ngModel)]="nom.details" class="col-sm-4 input-lg nom-form"/>
      <input [(ngModel)]="nom.calories" class="col-sm-4 input-lg nom-form"/>
    </div>
  `
})
export class EditNomDetailsComponent {
  public nom: Nom;
}
