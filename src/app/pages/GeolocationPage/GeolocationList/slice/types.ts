import { Exception } from 'types/Exception';
import { Geolocation } from 'types/Geolocation';
import { Pagination } from 'types/Pagination';

/* --- STATE --- */
export interface GeolocationListState {
  geolocations: Pagination<Geolocation>;
  isLoading: boolean;
  //   todo;
  error?: Exception | null | any;
}
