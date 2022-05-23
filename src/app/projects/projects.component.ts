import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',],
})
export class ProjectsComponent implements OnInit {

  isMobile(){
    if(window.screen.width>=600){
      return 2
    }
    return 1
  }



  constructor() {}

  ngOnInit(): void {
  }
}
