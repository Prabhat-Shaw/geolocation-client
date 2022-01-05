import { Exception } from 'types/Exception';

/* --- STATE --- */
export interface GeolocationFormState {
  isLoading: boolean;
  //   todo;
  error?: Exception | null | any;
}
