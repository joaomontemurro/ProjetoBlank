import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.page.html',
  styleUrls: ['./quadrado.page.scss'],
})
export class QuadradoPage implements OnInit {

  public areabase! : number;
  public altura! : number;
  public resultado! : string;
  public altura2! : number;
  public resultado2! : string;
  

  constructor () { }
   
  public calcularArea() : void{
    this.resultado = "A área é de " + (this.areabase * this.altura) / 3 + " cm³.";
    this.resultado2 = "A área é de " + (this.altura2 * this.altura2 * this.altura2)  + " cm³.";
    }
  
  ngOnInit() {
  }

}
