import react, { useContext  , useEffect, useState } from "react";
import { BoxContainer, FormContainer, MutedLink,Input, SubmitButton, BoldLink } from "./commone";
import { Marginer} from "../marginer";
import {auth} from "./firebase"
import { signInWithEmailAndPassword , onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { AccountContext } from "./accountContext";
export function SignupForum(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);
    const [isSignUp, setIsSignUp] = useState(true);
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
    const register = async () => {
      await createUserWithEmailAndPassword(auth, email, password)
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
    

    const {switchToSignin} = useContext(AccountContext); 


    return (
    <div>     {auth.currentUser ? (
        <div>
          <h1>{auth.currentUser.email} IS SIGNED IN!</h1>
          <button onClick={logout}>LOG out</button>
        </div>
      ) : (
    
    <BoxContainer>
        <FormContainer>
       
            <Input  type="text" placeholder="User-Name"/>
            
            
        <Marginer direction="vertical" margin="0em"/>
            <Input  type="email" placeholder="Email" onChange={handleEmailChange}
                  value={email}/>
            <Marginer direction="vertical" margin="0em"/>
             <Input  type="text" placeholder="Phone"/>
            <Marginer direction="vertical" margin="0em"/>
            <Input  type="password" placeholder="Password" onChange={handlePasswordChange}
                  value={password}/>
            <Marginer direction="vertical" margin="0em"/>
            <Input  type="password" placeholder="Confirme Password"/>
        </FormContainer>
           
            <Marginer direction="vertical" margin="1em"/>
            <SubmitButton type="submit" onClick={register}>Sign Up</SubmitButton>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#" >Already have an account ? <BoldLink href="#" onClick={switchToSignin}>Sing In</BoldLink></MutedLink>
    </BoxContainer>

    )}
    </div>)
}