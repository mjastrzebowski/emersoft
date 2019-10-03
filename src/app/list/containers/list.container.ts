import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mrs-list',
  templateUrl: './list.container.html'
})
export class ListContainerComponent {
  constructor(private store: Store<{}>) {}
}
