import { MediaType } from './media-type.enum';

export interface Media {
  id: number;
  title: string;
  type: MediaType;
  uploaded: Date;
}
