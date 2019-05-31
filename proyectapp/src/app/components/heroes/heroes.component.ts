import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor( private _HeroesServices: HeroesServices) { }

  ngOnInit() {
  this.heroes = this._HeroesServices.getHeores();
  console.log(this.heroes);
  }

}
