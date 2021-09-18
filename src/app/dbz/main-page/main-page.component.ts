import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
 
})
export class MainPageComponent  {

  personajes:Personaje[]=[{
    nombre:'Goku',
    poder:14000
  },
{
  nombre : 'Vegueta',
  poder:3500
}]
 
nuevo:Personaje=
{
  nombre:'Maestro Roshi',
  poder:1000
}

agregarNuevoPersonaje(argumento:Personaje){
  //console.log('');
  //debugger;
  this.personajes.push(argumento);
}

}
