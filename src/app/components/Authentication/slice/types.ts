import { History } from 'history';
import { User } from 'types/User';

/* --- STATE --- */
export interface AuthenticationState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  user: User | null;
}

export interface Registration {
  history: History;
  emailAddress: string;
  password: string;
}

export interface Login {
  history: History;
  emailAddress: string;
  password: string;
}

export interface Logout {
  history: History;
}
