import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../services/api.service";
import {ApiResultsGen} from "../../models/ApiResultsGen";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  public results$ : Observable<ApiResultsGen>;

  constructor(private svc: ApiService) {
    this.results$ = this.svc.results$;
  }

  ngOnInit(): void {
  }

}
