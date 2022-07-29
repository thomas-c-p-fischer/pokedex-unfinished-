import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "../models/pokemon";
import {ApiResultsGen} from "../models/ApiResultsGen";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public pokemon$: Observable<Pokemon>;
  public results$: Observable<ApiResultsGen>;


  constructor(
    private http: HttpClient
  ) {
    this.pokemon$ = this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/1");
    this.results$ = this.http.get<ApiResultsGen>("https://pokeapi.co/api/v2/generation")
  }


}
