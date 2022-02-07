import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  items:{
    name:string
    type:string
  }[]=[
    {name:"HTML",type:"green-border"},
    {name:"CSS",type:"green-border"},
    {name:"Javascript",type:"green-border"},
    {name:"Typescript",type:"green-border"},
    {name:"SASS",type:"green-border"},
    {name:"Responsive Web Design",type:"green-border"},
    {name:"Bootstrap",type:"green-border"},
    {name:"Git",type:"green-border"},
    {name:"Github",type:"green-border"},
    {name:"GSAP",type:"green-border"},
    {name:"Angular",type:"yellow-border"},
    {name:"React",type:"yellow-border"},
    {name:"JS REGEXP",type:"yellow-border"},
    {name:"PHP",type:"red-border"},
  ]

  antecedentes:{
    description:string
    url:string
  }[]=[
    {
      description:"ASIPROFE - Informative PHP website for ASIPROFE",
      url:"https://socpruebas.000webhostapp.com/"
    },
    {
      description:"Microsoft Windows Commands - Useful Keyboard commands",
      url:"https://edismr.github.io/windowscommands/"
    },
    {
      description:"Pura Vida Masks - Landing for this entrepreneurship",
      url:""
    },
    {
      description:"Tic tac toe Game",
      url:"https://edismr.github.io/tictactoe/"
    },
    {
      description:"Four in a Row Game (either known as Connect 4)",
      url:"https://edismr.github.io/4-in-a-row/"
    },
    {
      description:"Angular Calculator from Scratch",
      url:"https://edismr.github.io/calculator-angular/"
    },
    {
      description:"Angular Video Player",
      url:"https://edismr.github.io/videoplayer/"
    },
    {
      description:"Angular Weather API Consumption",
      url:"https://edismr.github.io/angular-weather-api/"
    },
    {
      description:"Angular Simple Cryptography (Base64)",
      url:"https://edismr.github.io/crypto/"
    },
    {
      description:"Target Parent Observe - Discover the parent node",
      url:"https://edismr.github.io/targetParentObserve/"
    },
    {
      description:"Whatsapp Text Message Generator - Generate a message programatically",
      url:"https://edismr.github.io/wsppSendTextMessage/"
    },
    {
      description:"Wild Waves Surf - React based Ecommerce",
      url:"https://github.com/No-Country/C2-01-M"
    },
    {
      description:"PHP Ecommerce - Sell in Whatsapp",
      url:""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
