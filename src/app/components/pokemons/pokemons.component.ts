import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public pokemon$ : Observable<Pokemon>;

  constructor(private svc: ApiService) {
  this.pokemon$ = this.svc.pokemon$;
  }

  ngOnInit(): void {

  }

}
