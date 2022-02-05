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

  antecedentes:string[]=[
    "uno",
    "dos",
    "tres",
    "cuatro",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
