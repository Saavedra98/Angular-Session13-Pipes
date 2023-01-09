import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  valor = "";
  moneda = 0;
  tipo = "S/."; 

  cambioUSD(){
    this.tipo = "USD";
  }

  cambioEUR(){
    this.tipo="EUR";
  }



}
