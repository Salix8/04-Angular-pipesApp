import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = `salix`;
  nombreUpper: string = `SALIX`;
  nombreCompleto: string = `sAliX bAbYlOnIcA`;

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
