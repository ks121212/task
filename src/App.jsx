import React,{createContext,useContext, useState } from "react";


const MessageContext= createContext();

function ChildComponent(){
    const message=useContext(MessageContext);
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
      <MessageContext.Provider value={{message:message}}>
      <ChildComponent />
      </MessageContext.Provider>
    </div>
  )
}


export default App;