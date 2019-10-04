import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'mrs-media-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Input() query = '';
  @Input() loading = false;

  @Output() search = new EventEmitter<string>();

  input: FormControl = new FormControl();
  input$ = this.input.valueChanges.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap((value: string) => this.search.emit(value))
  );
}
