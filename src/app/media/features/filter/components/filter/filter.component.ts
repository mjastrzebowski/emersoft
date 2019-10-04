import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaType } from 'src/app/media/models';

@Component({
  selector: 'mrs-media-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Input() filter: MediaType = null;
  @Output() set = new EventEmitter<string>();

  types = [
    { value: MediaType.all, label: 'All Media' },
    { value: MediaType.video, label: 'Videos' },
    { value: MediaType.audio, label: 'Audio' },
    { value: MediaType.image, label: 'Images' },
    { value: MediaType.document, label: 'Documents' }
  ];

  input: FormControl = new FormControl();
}
