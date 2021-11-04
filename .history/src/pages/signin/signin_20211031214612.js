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

      <form  id="form-signin" autocompete="off">
           
<div style="background: linear-gradient(to right bottom ,   rgba(255,255,255,0.7),   rgba(255,255,255,0.3));height:50px; width:100%;border-radius:5px;    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);">
            <h1 style="color: #424446;margin:10px;"> Piker <span style="font-size:30px;cursor:pointer;color:gray;float:right" onclick="openNav()">&#9776; </span></h1>  

    
</div>  


<div>
        <label for="email"></label>
    <input type="text" type="tel" name="emailuidtel"  class="form-control" placeholder="Email, Username or Phone number*" value=""    />
</div>
<div>    
    <label for="password"></label>
    <input type="password" autocomplete="on"  style="float: right;" class="form-control" placeholder="Password *" value="" id="password" name="pwd" />



</div>
    <label for="submit"></label>
    <input type="Submit" style="width:50%" class="btnSubmit" value="Sign In" id="button"  name="login"/>

   <br>
   <a href="#" style="color: #5a5c5f;
        text-decoration: none;" class="ForgetPwd">Forgetten Password?</a>
   
   <a href="./signup.php"><h4 style=" margin:28px;color:black;width:auto" >create account</h4><a/>

    <p class="signuperror"style="color:#ffffff;background:#fa4e52;text-align:center" > </p>                      
</form>



    </div>
);}


