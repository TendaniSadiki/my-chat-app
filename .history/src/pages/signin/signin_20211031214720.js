import React, {useState ,useEffect} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export default function Login( history){
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() =>{
    const token =  localStorage.getItem('token');

    if(token){
      history.push('/home')
    }
  },[history])


  const onLogin = () =>{
      setLoading(true);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
       .then((userCredentials) =>{
          localStorage.sortItem('token', userCredentials._tokenResponse.idToken);
          history.push('/home')
        })
      .catch(e => alert(e.message))
      .finally(() => setLoading(false))
    }
  
  return(
    <div>
      <br></br>
        <br></br>
        <br></br>
      <Link to="/signup"><i className="" >
        Sign In
                </i>
            </Link>
      <form>
        <input placeholder="email"  type="email" autoComplete="true" value={email} name="email"  
          onChange={e => setEmail(e.target.value)}
          required/>
        <input placeholder="password" type="password" autoComplete="true" value={password} name="password" 
          onChange={e => setPassword(e.target.value)}
          required  />
        <button onClick={onLogin} > { loading ? "Logging you in..." : "Login"}</button>
      </form>

      <form id="form-signin" autocompete="off">
           
 


<div>
        <label for="email"></label>
    <input type="text" type="tel" name="emailuidtel"  class="form-control" placeholder="Email, Username or Phone number*" value=""    />
</div>
<div>    
    <label for="password"></label>
    <input type="password" autocomplete="on"  class="form-control" placeholder="Password *" value="" id="password" name="pwd" />



</div>
    <label for="submit"></label>
    <input type="Submit"  class="btnSubmit" value="Sign In" id="button"  name="login"/>

   

                    
</form>



    </div>
);}


