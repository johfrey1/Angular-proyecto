import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    frase: any = {
      mensaje: 'hokla este es el mensaje',
      autor: 'john morales'
    };
    mostrar= true;
    personajes: string[] = ['batman','spaderman','superman'];
  constructor() { }

  ngOnInit() {
  }

}
