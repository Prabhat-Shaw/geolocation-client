import { Exception } from 'types/Exception';

/* --- STATE --- */
export interface RegistrationFormState {
  isLoading: boolean;
  // todo
  error?: Exception | null | any;
}
