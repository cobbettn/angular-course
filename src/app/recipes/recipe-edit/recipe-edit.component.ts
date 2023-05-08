import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  createMode: boolean = false;

  sub: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.createMode = params['id'] === undefined;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
