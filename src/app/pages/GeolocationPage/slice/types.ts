import { Exception } from 'types/Exception';
import { Pagination } from 'types/Pagination';

/* --- STATE --- */
export interface GeolocationState {
  geolocations: Pagination<Geolocation>;
  isLoading: boolean;
  //   todo;
  error?: Exception | null | any;
}
