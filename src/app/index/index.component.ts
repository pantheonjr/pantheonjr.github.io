import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent {
  year = new Date().getFullYear();
  current=null;
  persons = [
    {name: "Usuário Teste 1", photoUrl: "https://static.vakinha.com.br/uploads/vakinha/image/481590/tenor.gif?ims=700x410",desc: "Teste text"},
    {name: "Usuário Teste 1", photoUrl: "https://static.vakinha.com.br/uploads/vakinha/image/481590/tenor.gif?ims=700x410",desc: "Teste textTeste textTeste textTeste textTeste text"}
  ];

}
