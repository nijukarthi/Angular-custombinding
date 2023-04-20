import { Component } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent {

  cources = [
    {
      id:1,name:"HTML",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Free",price:1200
    },
    {
      id:2,name:"HTML",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Free",price:100
    },
    {
      id:3,name:"HTML5",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Premium",price:2000
    },
    {
      id:4,name:"css",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Free",price:1200
    },
    {
      id:5,name:"css",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Free",price:300
    },
    {
      id:6,name:"CSS3",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Premium",price:2500
    },
    {
      id:7,name:"Angular",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Free",price:800
    },
    {
      id:8,name:"Angular",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Free",price:1000
    },
    {
      id:8,name:"Angular",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      courcetype:"Premium",price:3000
    },
  ]
}
