import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutmeComponent {

  constructor() {
    let today = new Date()
    let christmasDate = new Date()
    christmasDate.setMonth(11)
    christmasDate.setDate(1)
    christmasDate.setHours(1, 0, 0)

    if (today.valueOf() >= christmasDate.valueOf()) {
      this.activateChristmasContent = true
    }
  }

  items: {
    name: string
    type: string
  }[] = [
      { name: "HTML", type: "green-border" },
      { name: "CSS", type: "green-border" },
      { name: "Javascript", type: "green-border" },
      { name: "Typescript", type: "green-border" },
      { name: "SASS", type: "green-border" },
      { name: "Responsive Web Design", type: "green-border" },
      { name: "Angular", type: "green-border" },
      { name: "NodeJs", type: "green-border" },
      { name: "Git", type: "green-border" },
      { name: "Github", type: "green-border" },
      { name: "Bootstrap", type: "green-border" },
      { name: "GSAP", type: "green-border" },
      { name: "Visual Studio Code", type: "green-border" },
      { name: "JSON", type: "green-border" },
      { name: "Ajax", type: "green-border" },
      { name: "JS REGEXP", type: "green-border" },
      { name: "Microsoft Office", type: "green-border" },
      { name: "CSS Animations", type: "green-border" },
      { name: "ReactJS", type: "yellow-border" },
      { name: "NestJs", type: "yellow-border" },
      { name: "TypeOrm", type: "yellow-border" },
      { name: "Linux", type: "yellow-border" },
      { name: "Adobe Photoshop", type: "yellow-border" },
      { name: "Adobe Premiere Pro", type: "yellow-border" },
      { name: "PHP", type: "red-border" },
      { name: "SQL", type: "red-border" },
    ]

  antecedentes: {
    description: string
    url: string
  }[] = [
      {
        description: 'Angular Frontend Developer at Mobile Marketing',
        url: ''
      },
      {
        description: 'Cards Dealer at Concorde Casino',
        url: ''
      },
      {
        description: "Dealer Training App",
        url: "https://edismr.github.io/canasta-builds/"
      },
      {
        description: 'My location coordinates - Get your location coordinates',
        url: 'https://edismr.github.io/my-location/'
      },
      {
        description: "Material Design Internet Speed Calculator",
        url: "https://edismr.github.io/speed-internet-calculator/"
      },
      {
        description: "Microsoft Windows Commands - Useful Keyboard commands",
        url: "https://edismr.github.io/windowscommands/"
      },
      {
        description: "Pura Vida Masks - Landing for this entrepreneurship",
        url: ""
      },
      {
        description: "Tic tac toe Game",
        url: "https://edismr.github.io/tictactoe/"
      },
      {
        description: "Four in a Row Game (either known as Connect 4)",
        url: "https://edismr.github.io/4-in-a-row/"
      },
      {
        description: "Angular Calculator, construction from Scratch",
        url: "https://edismr.github.io/calculator-angular/"
      },
      {
        description: "Angular Simple Video Player Controls",
        url: "https://edismr.github.io/videoplayer/"
      },
      {
        description: "Weather API Consumption",
        url: "https://edismr.github.io/angular-weather-api/"
      },
      {
        description: "Angular Simple Base64 Cryptography",
        url: "https://edismr.github.io/crypto/"
      },
      {
        description: "ASIPROFE - Informative website for ASIPROFE (PHP)",
        url: ""
      },
      {
        description: "Target Parent Observe - Discover html parent node",
        url: "https://edismr.github.io/targetParentObserve/"
      },
      {
        description: "Whatsapp Text Message Generator - Generate Whatsapp message programatically",
        url: "https://edismr.github.io/wsppSendTextMessage/"
      },
      {
        description: "React Ecommerce - Wild Waves Surf",
        url: "https://github.com/No-Country/C2-01-M"
      },
      {
        description: "PHP Ecommerce - Sell through Whatsapp",
        url: ""
      },
      {
        description: "Angular and NestJs Local Business Directory",
        url: ""
      },
      {
        description: "Screen recorder for Chrome, Windows",
        url: "https://edismr.github.io/screen-recorder/"
      },
      {
        description: "I made the videos carousel in this page 😄",
        url: ""
      }
    ]

  public activateChristmasContent: boolean = false
}
