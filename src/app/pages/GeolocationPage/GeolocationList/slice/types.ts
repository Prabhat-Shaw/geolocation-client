import { History } from 'history';
import { Geolocation } from 'types/Geolocation';
import { Pagination } from 'types/Pagination';

/* --- STATE --- */
export interface GeolocationListState {
  geolocations: Pagination<Geolocation>;
  isLoading: boolean;
  filters: any;
  sorting: Order;
  error?: string | null;
}

export interface RemoveGeolocation {
  uuid: string;
  history: History;
}

export interface GetGeolocations {
  page: number;
  order: string;
  history: History;
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}
