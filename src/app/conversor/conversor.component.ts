import { Component, OnInit } from '@angular/core';
import { RomanoService } from '../services/romano.service';
@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
  
})
export class ConversorComponent{

  numero=0;
  resultado="";

  constructor(private romanosService: RomanoService) { 

  }

  convertir(){
    this.resultado=this.romanosService.ToRomano(this.numero);   
  }

}
