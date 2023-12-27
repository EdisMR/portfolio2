import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor(private elem: ElementRef) {
    this.intersectionObserver()
  }


  @ViewChildren('videoPlayer', { read: ElementRef }) videoPlayerSource!: QueryList<ElementRef>;
  private get videoPlayer() {
    return this.videoPlayerSource.first.nativeElement;
  }

  videosNames: string[] = [
    'assets/img/Video(4).av1.mp4',
    'assets/img/video(15).av1.mp4',
    'assets/img/Video(5).AV1.mp4',
    'assets/img/video(14).webm',
    'assets/img/clock.av1.mp4',
    'assets/img/video(9).webm',
    'assets/img/video(1).webm',
    'assets/img/video(2).webm',
    'assets/img/video(3).webm',
    'assets/img/video(6).webm',
    'assets/img/video(7).webm',
    'assets/img/video(8).webm',
    'assets/img/video(13).webm',
    'assets/img/video(11).webm',
    'assets/img/video(12).webm',
    'assets/img/video(10).webm',
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
    let parentWidth = (this.videoPlayer.clientWidth) - (this.videoPlayer.clientWidth * (0.15));
    let newScroll = (scrollFromParent - parentWidth);
    let fullScroll = this.videoPlayer.scrollWidth;
    if (newScroll < -30) {
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


  observer!: IntersectionObserver;

  intersectionObserver() {
    let options = { root: null, rootMargin: '0px', threshold: 0.5 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (!(entry.isIntersecting)) {
          if (entry.target instanceof HTMLVideoElement) {
            if (entry.target.paused === false) {
              entry.target.pause()
            }
          }
        }
        if (entry.isIntersecting) {
          if (entry.target instanceof HTMLVideoElement) {
            if (entry.target.paused === true) {
              entry.target.play().catch(e => { })
            }
          }
        }
      })
    }, options);
  }

  ngAfterViewInit() {
    const elements = this.elem.nativeElement.querySelectorAll('.gallery video');
    elements.forEach((element: HTMLVideoElement) => {
      this.observer.observe(element)
    })
  }

  ngOnInit(): void {
  }
}
