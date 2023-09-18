import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',],
})
export class ProjectsComponent implements OnInit {

  @ViewChildren('videoPlayer', { read: ElementRef }) videoPlayerSource!: QueryList<ElementRef>;
  private get videoPlayer() {
    return this.videoPlayerSource.first.nativeElement;
  }

  videosNames: string[] = [
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

  scrollNext(): void {
    let scrollFromParent = this.videoPlayer.scrollLeft;
    let parentWidth = this.videoPlayer.clientWidth;
    let scrollWidth = this.videoPlayer.scrollWidth;
    let newScroll = scrollFromParent + parentWidth + 20;
    if (newScroll > scrollWidth) {
      this.videoPlayer.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      this.videoPlayer.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  }

  scrollPrev(): void {
    let scrollFromParent = this.videoPlayer.scrollLeft;
    let parentWidth = this.videoPlayer.clientWidth;
    let newScroll = scrollFromParent - parentWidth;
    let fullScroll = this.videoPlayer.scrollWidth;
    if (newScroll < 0) {
      this.videoPlayer.scrollTo({ left: fullScroll, behavior: 'smooth' });
    } else {
      this.videoPlayer.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  }

  isMobile() {
    if (window.screen.width >= 600) {
      return 2
    }
    return 1
  }



  constructor() { }

  ngOnInit(): void {
  }
}
