import { History } from 'history';

/* --- STATE --- */
export interface GeolocationFormState {
  isLoading: boolean;
  error?: string | null;
}

export interface CreateGeolocation {
  history: History;
  ipAddress: string;
}
