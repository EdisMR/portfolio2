import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  share():void{
    window.navigator.share({
      title:"Edis MR - Portfolio",
      url:window.location.href
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
