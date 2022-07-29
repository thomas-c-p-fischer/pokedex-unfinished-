import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-a-pokemon',
  templateUrl: './a-pokemon.component.html',
  styleUrls: ['./a-pokemon.component.css']
})
export class APokemonComponent implements OnInit {
  @Input() public pokemon$: Pokemon | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
