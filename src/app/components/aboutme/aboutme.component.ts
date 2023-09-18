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
    {name:"Angular",type:"green-border"},
    {name:"Git",type:"green-border"},
    {name:"Github",type:"green-border"},
    {name:"Bootstrap",type:"green-border"},
    {name:"GSAP",type:"green-border"},
    {name:"Visual Studio Code",type:"green-border"},
    {name:"JSON",type:"green-border"},
    {name:"Ajax",type:"green-border"},
    {name:"JS REGEXP",type:"green-border"},
    {name:"React",type:"yellow-border"},
    {name:"PHP",type:"red-border"},
  ]

  antecedentes:{
    description:string
    url:string
  }[]=[
    {
      description:'Angular Frontend Developer at Mobile Marketing',
      url:''
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
      description:"Angular Simple Base64 Cryptography",
      url:"https://edismr.github.io/crypto/"
    },
    {
      description:"ASIPROFE - Informative website for ASIPROFE (PHP)",
      url:""
    },
    {
      description:"Target Parent Observe - Discover html parent node",
      url:"https://edismr.github.io/targetParentObserve/"
    },
    {
      description:"Whatsapp Text Message Generator - Generate Whatsapp message programatically",
      url:"https://edismr.github.io/wsppSendTextMessage/"
    },
    {
      description:"Wild Waves Surf - React based Ecommerce",
      url:"https://github.com/No-Country/C2-01-M"
    },
    {
      description:"PHP Ecommerce - Sell in Whatsapp",
      url:""
    },
    {
      description:"Angular and NestJs Local Business Directory",
      url:""
    },
    {
      description:"Screen recorder for Chrome, Windows",
      url:"https://edismr.github.io/screen-recorder/"
    },
    {
      description:"Angular Roulette payment practice",
      url:"https://edismr.github.io/canasta-builds/"
    },
    {
      description:"Material Design Internet Speed Calculator",
      url:"https://edismr.github.io/speed-internet-calculator/"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
