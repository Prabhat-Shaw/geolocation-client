import { User } from 'types/User';

/* --- STATE --- */
export interface AuthenticationState {
  isAuthenticated: boolean;
  user: User | null;
}
