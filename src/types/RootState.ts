import { AuthenticationState } from 'app/components/Authentication/slice/types';
import { GeolocationListState } from 'app/pages/GeolocationPage/GeolocationList/slice/types';
import { LoginFormState } from 'app/pages/LoginPage/LoginForm/slice/types';
import { RegistrationFormState } from 'app/pages/RegistrationPage/RegistrationForm/slice/types';
import { GeolocationFormState } from 'app/pages/GeolocationPage/GeolocationForm/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  loginForm?: LoginFormState;
  registrationForm?: RegistrationFormState;
  authentication?: AuthenticationState;
  geolocationList?: GeolocationListState;
  geolocationForm?: GeolocationFormState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
