import React from "react";
import { useState } from "react";


const messageContext= createContext();

function ChildComponent(){
    const message=useContext(messageContext);
  return(
    <div>
      <h2>Child Component</h2>
      <p>{message}</p>
    </div>
  )
}

function App(){

   const [message,setMessage]=useState('hello from App');

  return(
    <div>
      <h1>Parend Component</h1>
      <messageContext.provider value={message}>
      <ChildComponent />
      </messageContext.provider>
    </div>
  )
}


export default App;