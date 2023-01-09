import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  valor = "";
  moneda = 0;
  tipo = ""; 
  element = false;

  cambioUSD(){
    this.tipo = "USD";
    this.element=true;
  }

  cambioEUR(){
    this.tipo="EUR";
    this.element=true
  }



}
