import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent {}
