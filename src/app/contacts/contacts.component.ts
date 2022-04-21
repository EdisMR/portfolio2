import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts:{
    title:string
    url:string
    image:string/* imagen de fondo */
  }[]=[
    {
      title:"LinkedIn",
      url:"https://www.linkedin.com/in/edismr/",
      image:""
    },
    {
      title:"Github",
      url:"https://github.com/EdisMR",
      image:""
    },
    {
      title:"Email",
      url:"mailto:edisanthony@gmail.com",
      image:""
    },
    {
      title:"Telegram",
      url:"https://t.me/edismr",
      image:""
    },
    {
      title:"Whatsapp",
      url:"https://wa.me/50663062581",
      image:""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
