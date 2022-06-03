import react, { useContext  , useEffect, useState } from "react";
import { BoxContainer, FormContainer, MutedLink,Input, SubmitButton, BoldLink } from "./commone";
import { Marginer} from "../marginer";
import { AccountContext } from "./accountContext";
import {auth} from "./firebase"
import { signInWithEmailAndPassword , onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth';




export function LoginForum(props) {
    
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);
    const [isSignUp, setIsSignUp] = useState(false);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        setUser(user);
      });
    });
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
   
    
    const signIn = async () => {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    
    const logout = () => {
      signOut(auth).catch((error) => {
        console.log(error);
      });
    };

    const {switchToSignup} = useContext(AccountContext); 
    return (
     
        <div>
    {auth.currentUser ? (
        <div>
          <h1>{auth.currentUser.email} IS SIGNED IN!</h1>
          <button onClick={logout}>LOG out</button>
        </div>
      ) : (
    <BoxContainer>
        <FormContainer>
        <Marginer direction="vertical" margin="1em"/>
            <Input  
                type="email" 
                placeholder="Email/Phone" 
                value={email}
                onChange={handleEmailChange}
                
            />
            <Marginer direction="vertical" margin="0em"/>
            <Input  
                type="password" 
                placeholder="Password" 
                value={password}
                  onChange={handlePasswordChange}
               
            />
            
        </FormContainer>
        <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#">Forget Password !</MutedLink>
            <Marginer direction="vertical" margin="3em"/>
            <SubmitButton type="submit" onClick={signIn}>Sign In</SubmitButton>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#" >Don't have an account ? <BoldLink href="#" onClick={switchToSignup}>Sing Up</BoldLink></MutedLink>
            
    </BoxContainer>
      )}
    </div>
    )
    
}

