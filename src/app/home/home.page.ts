import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public base! : number;
  public base2! : number;
  public altura! : number;
  public altura2! : number;
  public resultado! : string;
  public resultado2! : string;
  public resultado3! : string;
  public largura! : number;
  public apotema! : number;

  constructor() {}

  public calcularArea() : void{
    this.resultado = "A área é de " + (this.base * this.altura) / 2 + " cm².";
    this.resultado2 = "A área é de " + (this.largura * this.altura2) + " cm².";
    this.resultado3 = "A área é de " + (5 * this.apotema * this.base2) / 2 + " cm².";
  } 
  
}
