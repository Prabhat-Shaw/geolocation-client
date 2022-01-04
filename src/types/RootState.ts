import { LoginFormState } from 'app/pages/LoginPage/LoginForm/slice/types';
import { RegistrationFormState } from 'app/pages/RegistrationPage/RegistrationForm/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  loginForm?: LoginFormState;
  registrationForm?: RegistrationFormState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
