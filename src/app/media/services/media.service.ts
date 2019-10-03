import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Media } from '../models';

@Injectable()
export class MediaService {
  constructor(private http: HttpClient) {}

  get(): Observable<Media[]> {
    return this.http.get<Media[]>('./assets/mock.json');
  }
}
