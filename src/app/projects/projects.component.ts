import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',],
})
export class ProjectsComponent implements OnInit {

  videosNames:string[] = [
    'assets/img/video(1).mp4',
    'assets/img/video(2).mp4',
    'assets/img/video(3).mp4',
    'assets/img/video(4).mp4',
    'assets/img/video(5).mp4',
    'assets/img/video(6).mp4',
    'assets/img/video(7).mp4',
    'assets/img/video(8).mp4',
    'assets/img/video(9).mp4',
    'assets/img/video(10).mp4',
    'assets/img/video(11).mp4',
    'assets/img/video(12).mp4',
    'assets/img/video(13).mp4',
    'assets/img/video(14).mp4',
  ]

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
