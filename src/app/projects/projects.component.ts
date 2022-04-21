import { Component, OnInit } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',],
})
export class ProjectsComponent implements OnInit {
  settings:any = {
    counter: true,
    zoom:true,
    download:false,
    showZoomInOutIcons:true,
    width: '100%',
    showBarsAfter:true,
    showMaximizeIcon:true,
    showCloseIcon:true,
    showThumbnails:true,
    controls:true,
    container: '#lightgallery',
  };

  showLoader:boolean = false;

  constructor() {}

  ngOnInit(): void {
  }
}
