import { Abstract } from './Abstract';

interface Authentication extends Abstract {
  email_address: string;
}

export interface User extends Abstract {
  authentication: Authentication;
}
