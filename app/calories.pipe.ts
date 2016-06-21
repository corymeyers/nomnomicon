import {Pipe, PipeTransform} from 'angular2/core';
import {Nom} from './nom.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Nom[], args) {


    var healthy = args[0];
    if( healthy === "healthy"){
      return input.filter(function(nom){
        return nom.calories <= 500;
      });
    } else if (healthy === "unhealthy") {
      return input.filter(function(nom){
        return nom.calories > 500;
      });
    } else {
      return input;
    }


  }
}
