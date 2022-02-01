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
    {imageurl:"assets/icons/psico.svg",
    title:"Continuous Learning through digital platforms like Youtube, Udemy, LinekdIn Learning, among others"},
    {imageurl:"assets/icons/check.svg",
    title:"Remarkable efficiency and effectiveness on projects of all sizes"},
    {imageurl:"assets/icons/list.svg",
    title:"Effective methodologies applied, for example Kanban, Scrum, Pomodoro"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
