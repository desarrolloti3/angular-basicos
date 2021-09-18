import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { heroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,    
  ],
  imports: [
    BrowserModule,
    heroesModule,
    ContadorModule,
    DbzModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
