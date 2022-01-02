import { useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import axios from 'axios'


const clientId = '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com'
  
function Login() {

  const [user, setUser] = useState('')
    const onSuccess =async (res) => {
      const {profileObj} =res 
      
      try{
        const {data} = axios.get('')
        const index = data.findIndex(user=>user.id===profileObj.googleId)// index || -1
        const User = {
          user: res.profileObj.googleId
         };
        if(index===-1){
          await axios.post( `https://61c4bbb0f1af4a0017d99775.mockapi.io/users`, User);
        }
        setUser(User)
      }catch(e){
        console.log(e)
      }



     console.log('Login Success: currentUser:', res.profileObj);
    
    };
  
    const onFailure = (res) => {
      console.log('Login failed: res:', res);
      alert(
        `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
      );
    };
  
    const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: 'offline',
      // responseType: 'code',
      // prompt: 'consent',
      redirectUri: "http://localhost:3000/"

    });
  
    return (
      <button onClick={signIn} className="button">
        <img src="icons/google.svg" alt="google login" className="icon"></img>
  
        <span className="buttonText">Sign in with Google</span>
      </button>
    );
  }
  
  export default Login;