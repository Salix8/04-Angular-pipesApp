import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = `Salix`;
  genero: string = `masculino`;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18Plural
  clientes: string[] = [`María`, `Diana`, `Maximus`, `Salix`, `Pedro`];
  clientesMapa = {
    '=0': 'no tenemos ningún clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  //keyValue Pipe
  persona = {
    direccion: `Ottawa, Canada`,
    nombre: `Salix`,
    edad: 20,
  }

  //JSON Pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }  
  ]

  //Ascny Pipe
  miObservable = interval(1);
  miObservableSeg = interval(1000);

  valorPromesa = new Promise( ( resolve, rejects ) => {
    setTimeout( () => {
      resolve( `Tenemos data de promesa` );
    }, 3500 );
  });


  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){
    if (this.genero === `masculino`) {
      this.genero = `femenino`;
    }else if (this.genero === `femenino`) {
      this.genero = `masculino`;
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

}
