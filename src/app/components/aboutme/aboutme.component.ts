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
      { name: "ASP .NET Core", type: "red-border" },
      { name: "C#", type: "red-border" },
      { name: "Visual Studio Community", type: "red-border" },
      { name: "PHP", type: "red-border" },
      { name: "SQL", type: "red-border" },
    ]

  antecedentes: {
    id: number,
    description: string
    url: string
  }[] = [
      {
        id: 1,
        description: 'Angular Frontend Developer at Mobile Marketing',
        url: ''
      },
      {
        id: 2,
        description: 'Cards Dealer at Concorde Casino',
        url: ''
      },
      {
        id: 3,
        description: "Dealer Training App",
        url: "https://edismr.github.io/canasta-builds/"
      },
      {
        id: 4,
        description: 'My location coordinates - Get your location coordinates',
        url: 'https://edismr.github.io/my-location/'
      },
      {
        id: 5,
        description: "Material Design Internet Speed Calculator",
        url: "https://edismr.github.io/speed-internet-calculator/"
      },
      {
        id: 6,
        description: "Microsoft Windows Commands - Useful Keyboard commands",
        url: "https://edismr.github.io/windowscommands/"
      },
      {
        id: 7,
        description: "Pura Vida Masks - Landing for this entrepreneurship",
        url: ""
      },
      {
        id: 8,
        description: "Tic tac toe Game",
        url: "https://edismr.github.io/tictactoe/"
      },
      {
        id: 9,
        description: "Four in a Row Game (either known as Connect 4)",
        url: "https://edismr.github.io/4-in-a-row/"
      },
      {
        id: 10,
        description: "Angular Calculator, construction from Scratch",
        url: "https://edismr.github.io/calculator-angular/"
      },
      {
        id: 11,
        description: "Angular Simple Video Player Controls",
        url: "https://edismr.github.io/videoplayer/"
      },
      {
        id: 12,
        description: "Weather API Consumption",
        url: "https://edismr.github.io/angular-weather-api/"
      },
      {
        id: 13,
        description: "Angular Simple Base64 Cryptography",
        url: "https://edismr.github.io/crypto/"
      },
      {
        id: 14,
        description: "ASIPROFE - Informative website for ASIPROFE (PHP)",
        url: ""
      },
      {
        id: 15,
        description: "Target Parent Observe - Discover html parent node",
        url: "https://edismr.github.io/targetParentObserve/"
      },
      {
        id: 16,
        description: "Whatsapp Text Message Generator - Generate Whatsapp message programatically",
        url: "https://edismr.github.io/wsppSendTextMessage/"
      },
      {
        id: 17,
        description: "React Ecommerce - Wild Waves Surf",
        url: "https://github.com/No-Country/C2-01-M"
      },
      {
        id: 18,
        description: "PHP Ecommerce - Sell through Whatsapp",
        url: ""
      },
      {
        id: 19,
        description: "Angular and NestJs Local Business Directory",
        url: ""
      },
      {
        id: 20,
        description: "Screen recorder for Chrome, Windows",
        url: "https://edismr.github.io/screen-recorder/"
      },
      {
        id: 21,
        description: "I made the videos carousel in this page 😄",
        url: ""
      }
    ]

  public activateChristmasContent: boolean = false
}
