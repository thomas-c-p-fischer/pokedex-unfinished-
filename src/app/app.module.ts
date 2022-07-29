import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from './components/homepage/homepage.component';
import { APokemonComponent } from './components/a-pokemon/a-pokemon.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'pokemons', component: PokemonsComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    HomepageComponent,
    APokemonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
