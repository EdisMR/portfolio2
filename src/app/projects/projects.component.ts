import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',],
})
export class ProjectsComponent implements OnInit {

  onSwiper(data:any) {
  }
  onSlideChange() {
  }

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
