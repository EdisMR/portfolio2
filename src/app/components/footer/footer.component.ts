import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  urlBase64: string = 'aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VkaXNtci8='

  share(): void {
    window.navigator.share({
      title: "Edis MR - Portfolio",
      url: window.location.href
    }).catch(e => {
      window.navigator.clipboard.writeText(window.location.href)
        .then(e => {
          alert('Share Action Failed.\nUrl Copied to Clipboard.')
        }).catch(e => {
          alert('Share Action Failed.')
        })
    })
  }

  openUrl(): void {
    window.open(atob(this.urlBase64), '_blank', 'noopener,noreferrer')
  }

}
