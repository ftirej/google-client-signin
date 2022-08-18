import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import './App.css';

function App() {
  // const handleCallbackResponse = (response) => {
  //   console.log({ credentials: response.credential });
  //   const jwtDecoded = jwt_decode(response.credential);
  //   console.log(jwtDecoded);
  // };

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:
  //       '317200523271-mrrvvj4ubhvtljv19vt36o07s2e5qft8.apps.googleusercontent.com',
  //     callback: handleCallbackResponse,
  //   });

  //   google?.accounts?.id.renderButton(document.getElementById('signInDiv'), {
  //     theme: 'outline',
  //     size: 'large',
  //   });
  // }, []);

  // useGoogleOneTapLogin({
  //   onSuccess: credentialResponse => {
  //       console.log(credentialResponse);
  //   },
  //   onError: () => {
  //     console.log('Login Failed')
  //   }
  // });

  return (
    <div className='App'>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
        />
    </div>
  );
}

export default App;
