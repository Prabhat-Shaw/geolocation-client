import { Exception } from 'types/Exception';

/* --- STATE --- */
export interface LoginFormState {
  isLoading: boolean;
  // todo
  error?: Exception | null | any;
}
