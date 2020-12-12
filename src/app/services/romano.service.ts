import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanoService {

constructor() { }
  
 public ToRomano(numero): string{
    var numero1=parseFloat(numero);
    var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    var letras = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    var i=0
    var message=""
    while (numero1>0 && i<13){
        if(numero1>=values[i]){
            message+= letras[i];
             numero1= numero1-values[i];
        }else{
            i+=1
        }
    }
    return message
  }
}
