import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{

Nombre: String ='Ironman';   
Edad  : number =45;
get nombreCapitalizado(){
    return this.Nombre.toUpperCase();
}
obtenerNombre():String{
    return `${this.Nombre} - ${this.Edad}`;
}

cambiarNombre():void{
    this.Nombre='Spiderman';
}

cambiarEdad():void{
    this.Edad=30;
console.log("hey...")
}
}