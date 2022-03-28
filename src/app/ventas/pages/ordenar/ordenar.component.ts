import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  boleano: boolean = true;

  ordenarPor: string = ``;
  
  heroes: Heroe[] = [
    {
      nombre: `Sueprman`,
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: `Batman`,
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: `Robin`,
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: `Dartdevil`,
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: `Linterna verde`,
      vuela: true,
      color: Color.verde,
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleMayuscula(){
    this.boleano = !this.boleano;
  }

  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
  }

}
