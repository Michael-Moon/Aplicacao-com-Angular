import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  binarioAtual:String = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(evento: KeyboardEvent){

    let t = (<HTMLInputElement>evento.target).value;
    let count=0;
    let aux=0;    

    for(let i=t.length - 1; i >=0; i-- ){

      if(t.charAt(i) != '0' && t.charAt(i) != '1'){

        alert(t.charAt(i) + " : Não é valor binario");      
      }
      
      aux += Math.pow( 2 , count ) *  Number(t.charAt(i));
      count++; 
    }
    if(aux == 0 && t ==''){
      this.binarioAtual = '';
    }else {
      this.binarioAtual =  aux.toString();
    }
     

  }
}
