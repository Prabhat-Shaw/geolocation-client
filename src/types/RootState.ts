import { LoginPageState } from 'app/pages/LoginPage/slice/types';
import { RegistrationPageState } from 'app/pages/RegistrationPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  loginPage?: LoginPageState;
  registrationPage?: RegistrationPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
