import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren ('lightgalleryElement',{read:ElementRef})
  lightgalleryElement!: QueryList<ElementRef>

  showGallery():void{
    this.lightgalleryElement.first.nativeElement.click()
  }

  settings:any = {
    counter: true,
    zoom:true,
    download:false,
    showZoomInOutIcons:true,
    width: '100%',
    showBarsAfter:true,
    showMaximizeIcon:true,
    showCloseIcon:false,
    showThumbnails:true,
    controls:true,
    container: '#lightgallery',
  };

  showLoader:boolean = false;

  ngAfterViewInit(): void {
    this.showGallery();
  }

  constructor() {}

  ngOnInit(): void {
  }
}
