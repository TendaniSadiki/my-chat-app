import {BrowserRouter as Link} from 'react-router-dom';
import React, {useState} from 'react';
import {useHistory}
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
export default function Signup(){

  const history = useHistory();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading, setLoading] = useState('')
  
  const onSignup =(history) =>{
    setLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(() =>{
      updateProfile(auth.currentUser,{ displayName: name})
        .then(() => history.push('/'))
        .catch((e) => alert(e.message) )
    }).catch((e) => alert(e.message))
    .finally(() => setLoading(false))
  }

    return(
      <div>
        <br></br>
        <br></br>
        <br></br>
      <Link to="/signin"><i className="fas fa-user" >
        Signin
                </i>
            </Link>
        <form>
          <input placeholder="Username" type="name" autoComplete="true" value={name} name="name" 
          onChange={e => setName(e.target.value)} 
          required />
          <input placeholder="email" type="email" autoComplete="true" value={email} name="email"  
          onChange={e => setEmail(e.target.value)}
          required />
          <input placeholder="password" type="password" autoComplete="true" value={password} name="password" 
          onChange={e => setPassword(e.target.value)}
          required />
          <button onclick={onSignup} >
          {loading ? 'Creating Profile...' : "Sign Up"}
          </button>
        </form>
        </div>
  );}