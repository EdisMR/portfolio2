import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.scss']
})
export class CoverpageComponent implements OnInit {

  itemcards:{
    imageurl:string
    title:string
  }[]=[
    {imageurl:"assets/icons/psico.svg",title:"Continuous Learning Continuous Learning Continuous Learning Continuous Learning"},
    {imageurl:"assets/icons/check.svg",title:"Eficiencia y eficacia notable Eficiencia y eficacia notable Eficiencia y eficacia notable"},
    {imageurl:"assets/icons/list.svg",title:"Metodologias efectivas aplicadas Metodologias efectivas aplicadas Metodologias efectivas aplicadas"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
