import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  urlBase64:string='aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VkaXNtci8='

  share():void{
    window.navigator.share({
      title:"Edis MR - Portfolio",
      url:window.location.href
    })
  }

  openUrl():void{
    window.open(atob(this.urlBase64),'_blank','noopener,noreferrer')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
