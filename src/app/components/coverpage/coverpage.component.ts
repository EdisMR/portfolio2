import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoverpageComponent {
}
