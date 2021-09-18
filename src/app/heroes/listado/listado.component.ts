import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes : String[]=['Spiderman','Ironman','Hulk','Thor','Capitan America']
  heroeBorado: String = '';

  borrarheroe(){    
    this.heroeBorado = this.heroes.shift() || '';
    
    
  }

  
}
